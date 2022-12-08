from .serializers import ClientSerializer
from .models import client
from rest_framework import views, response, permissions, status
import datetime as dt
import string
import random


# Create your views here.
class ClientList(views.APIView):
    permission_classes = [permissions.IsAdminUser]

    def createIdentifier(self):
        return "".join(random.choice(string.ascii_uppercase)
                       for i in range(16))

    def get(self, request, format=None):
        i = client.objects.all()
        s = ClientSerializer(i, many=True)
        return response.Response(s.data)

    def post(self, request, format=None):
        s = ClientSerializer(data=request.data)
        if s.is_valid():
            s.validated_data['identifier'] = self.createIdentifier()
            s.save()
            return response.Response(s.data, status=status.HTTP_201_CREATED)
        return response.Response(s.errors, status=status.HTTP_400_BAD_REQUEST)


class ClientView(views.APIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get(self, request, format=None):
        # while a pk would probably be better, i want to use a custom string
        # for identification just because.
        id = request.META.get('HTTP_X_IDENTIFICATION')

        try:
            item = client.objects.get(identifier=id)
        except client.DoesNotExist:
            return response.Response(status.HTTP_404_NOT_FOUND)

        if dt.datetime.now().replace(tzinfo=dt.timezone.utc) >=\
                getattr(item, 'due'):
            paid = False
        else:
            paid = True

        item1 = ClientSerializer(item, data={'paid': paid}, partial=True)
        item1.is_valid(raise_exception=True)
        item1.save()

        return response.Response(item1.validated_data['paid'],
                                 status.HTTP_200_OK)

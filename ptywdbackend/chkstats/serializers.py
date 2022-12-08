from rest_framework import serializers, fields
from .models import client


class ClientSerializer(serializers.ModelSerializer):
    due = fields.DateTimeField(input_formats=['%Y-%m-%dT%H:%M:%SZ'])

    class Meta:
        model = client
        fields = '__all__'

from django.contrib import admin
from .models import client


# Register your models here.
class ClientAdmin(admin.ModelAdmin):
    list_display = ('identifier', 'paid', 'due')
    list_filter = ('paid', )


admin.site.register(client, ClientAdmin)

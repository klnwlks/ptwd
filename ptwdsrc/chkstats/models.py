from django.db import models


# Create your models here.
class client(models.Model):
    identifier = models.CharField(default='', max_length=100)
    due = models.DateTimeField()
    paid = models.BooleanField(default=True)

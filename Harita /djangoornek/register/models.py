from django.db import models
from users.models import Users

# Create your models here.

class Registers(models.Model):
    langitute = models.FloatField(max_length=30)
    latitude = models.FloatField(max_length=30)
    foreignUser = models.ForeignKey(Users, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
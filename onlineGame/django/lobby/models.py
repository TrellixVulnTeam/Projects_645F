from django.db import models

# Create your models here.

class Game(models.Model):
    username = models.CharField(max_length=16)
    searching = models.IntegerField(default=0)
    connect = models.IntegerField(default=0)
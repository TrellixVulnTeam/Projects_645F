from django.db import models
from Kullanicilar.models import Kullanicilar
from Kitaplar.models import Kitaplar

# Create your models here.
class Kutuphanem(models.Model):
    Kullanici_Id = models.ForeignKey(Kullanicilar, on_delete=models.CASCADE)
    Kitap_Id = models.IntegerField()

    def __str__(self):
        return str(self.Kitap_Id)
from django.db import models
from Kullanicilar.models import Kullanicilar
from Kitaplar.models import Kitaplar

# Create your models here.
class Sayac(models.Model):
    Kullanici_Id = models.ForeignKey(Kullanicilar, on_delete=models.CASCADE)
    Kitap_Id = models.ForeignKey(Kitaplar, on_delete=models.CASCADE)
    Sayac = models.IntegerField()

    def __str__(self):
        return self.Kitap_Id
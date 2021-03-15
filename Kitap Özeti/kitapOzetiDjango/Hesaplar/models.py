from django.db import models
from Kullanicilar.models import Kullanicilar

# Create your models here.
class Hesaplar(models.Model):
    Kullanici_Id = models.ForeignKey(Kullanicilar, on_delete=models.CASCADE, verbose_name="Kullanıcı ID")
    Hesap_No = models.BigIntegerField(verbose_name="Hesap Numarası")
    Surec = models.CharField(max_length=12, default="Beklemede")

    def __str__(self):
        return self.Hesap_No
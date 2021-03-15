from django.db import models
from Kullanicilar.models import Kullanicilar

# Create your models here.
class Kitaplar(models.Model):
    Kitap_Adi = models.CharField(max_length=100, verbose_name="Kitap Adı")
    Kitap_Yazari = models.CharField(max_length=32, verbose_name="Kitap Yazarı")
    Kitap_Türü = models.CharField(max_length=32, verbose_name="Kitap Türü")
    Olusturma_Tarihi = models.DateTimeField(verbose_name="Oluşturma Tarihi")
    Kitap_Sureci = models.CharField(max_length=16, verbose_name="Kitap Süreci", default="Yayinlanmadi")
    Kitap_Ozeti = models.CharField(max_length=5000, verbose_name="Kitap Özeti")
    Kitap_Olusturan_Id = models.ForeignKey(Kullanicilar, on_delete=models.CASCADE)

    def __str__(self):
        return self.Kitap_Adi
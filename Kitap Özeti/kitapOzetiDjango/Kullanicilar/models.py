from django.db import models

# Create your models here.

class Kullanicilar(models.Model):
    Email = models.EmailField(verbose_name="Email")
    Sifre = models.CharField(max_length=16, verbose_name="Şifre")
    Yetki = models.CharField(default="Musteri", verbose_name="Yetki", max_length=16)
    Ad = models.CharField(max_length=32, verbose_name="Ad")
    Soyad = models.CharField(max_length=32, verbose_name="Soyad")
    Tel = models.CharField(max_length=11, verbose_name="Telefon", null="True")

    def __str__(self):
        return self.Email
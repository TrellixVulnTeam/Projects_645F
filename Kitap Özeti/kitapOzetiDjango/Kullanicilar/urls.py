from django.conf.urls import url
from Kullanicilar import views

urlpatterns = [

    url(r'^kullanicilar/$', views.KullaniciData.as_view()),
    url(r'^kullanici_kayit/$', views.KullaniciKayit.as_view()),
    url(r'^sifremi_unuttum/$', views.ForgetPassword.as_view()),
    url(r'^kitap_olusturan/$', views.CreateBookUser.as_view()),


]
from django.conf.urls import url
from Kayitlarim import views

urlpatterns = [

    url(r'^kayit_ekle/$', views.KayitEkle.as_view()),
    url(r'^kayitlarim/$', views.KayitlarimData.as_view()),
    url(r'^edit_kayit/$', views.EditKayit.as_view()),
    url(r'^edit_kaydet/$', views.SaveEdit.as_view()),
    url(r'^send_edit/$', views.SendEdit.as_view()),

]
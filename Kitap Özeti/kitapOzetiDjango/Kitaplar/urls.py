from django.conf.urls import url
from Kitaplar import views

urlpatterns = [

    url(r'^kitaplar/$', views.KitaplarData.as_view()),
    url(r'^kitap_detay/$', views.KitaplarDetay.as_view()),
    url(r'^kitaplarim/$', views.MyBooks.as_view()),
    url(r'^kitap_ekle/$', views.AddBook.as_view()),
    url(r'^arama/$', views.Searching.as_view()),

]
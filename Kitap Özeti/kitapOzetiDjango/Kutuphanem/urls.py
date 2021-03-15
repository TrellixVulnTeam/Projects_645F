from django.conf.urls import url
from Kutuphanem import views

urlpatterns = [
    url(r'^kutuphanem/$', views.KutuphaneData.as_view()),
    url(r'^kutuphane_kontrol/$', views.FavoriteBookControl.as_view()),
    url(r'^kutuphane_ekle/$', views.FavoriteAdd.as_view()),


]
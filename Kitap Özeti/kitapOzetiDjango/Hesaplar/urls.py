from django.conf.urls import url
from Hesaplar import views

urlpatterns = [

    url(r'^hesaplar/$', views.HesaplarData.as_view()),


]
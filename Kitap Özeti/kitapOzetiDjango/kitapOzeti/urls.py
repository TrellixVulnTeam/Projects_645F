"""kitapOzeti URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin

from django.conf.urls import url, include

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^Kullanicilar/', include('Kullanicilar.urls')),
    url(r'^Hesaplar/', include('Hesaplar.urls')),
    url(r'^Kitaplar/', include('Kitaplar.urls')),
    url(r'^Kutuphanem/', include('Kutuphanem.urls')),
    url(r'^Sayac/', include('Sayac.urls')),
    url(r'^Apriori/', include('Apriori.urls')),
    url(r'^Kayitlarim/', include('Kayitlarim.urls')),
]

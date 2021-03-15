from django.conf.urls import url
from Sayac import views

urlpatterns = [
    url(r'^sayac/$', views.SayacData.as_view()),
]
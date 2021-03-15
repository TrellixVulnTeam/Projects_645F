from django.conf.urls import url
from lobby import views

urlpatterns = [

    url(r'^game/$', views.gameData.as_view()),


]
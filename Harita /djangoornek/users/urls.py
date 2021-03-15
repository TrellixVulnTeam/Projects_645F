from django.conf.urls import url
from users import views

urlpatterns = [

    url(r'^users/$', views.PostUsers.as_view()),


]
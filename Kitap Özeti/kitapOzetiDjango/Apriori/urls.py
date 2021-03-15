from django.conf.urls import url
from Apriori import views

urlpatterns = [
    url(r'^apriori/$', views.AprioriData.as_view()),
]
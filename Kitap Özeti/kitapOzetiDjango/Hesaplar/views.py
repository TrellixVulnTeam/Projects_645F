from django.shortcuts import render

from rest_framework.views import APIView
from .models import Hesaplar
from .serializers import hesaplarSerializers
from rest_framework.response import Response

# Create your views here.
class HesaplarData(APIView):

    def post(self, request):

        rest_list = Hesaplar.objects.all()
        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = hesaplarSerializers(rest_list, many=True)
        return Response(serializer.data)

    def get(self, request):
        rest_list = Hesaplar.objects.all()
        serializer = hesaplarSerializers(rest_list, many=True)
        return Response(serializer.data)
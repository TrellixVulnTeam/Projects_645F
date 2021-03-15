from django.shortcuts import render
from rest_framework.views import APIView
from .models import Sayac
from .serializers import sayacSerializers
from rest_framework.response import Response

# Create your views here.
class SayacData(APIView):

    def post(self, request):

        rest_list = Sayac.objects.all()
        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = sayacSerializers(rest_list, many=True)
        return Response(serializer.data)

    def get(self, request):
        rest_list = Sayac.objects.all()
        serializer = sayacSerializers(rest_list, many=True)
        return Response(serializer.data)
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from .models import Game
from .serializers import gameSerializers


# Create your views here.
class gameData(APIView):

    #def post(self, request):



        # rest_list = Urunler.objects.all()
        #serializer = kitaplarSerializers(rest_list, many=True)
        #return Response(serializer.data)

    def get(self, request):
        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Game.objects.all()
        serializer = gameSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)
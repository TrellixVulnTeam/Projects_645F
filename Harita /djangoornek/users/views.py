from django.shortcuts import render
from rest_framework.views import APIView
from .models import Users
from .serializers import usersSerializers
from rest_framework.response import Response

# Create your views here.
class PostUsers(APIView):

    def post(self, request):

        rest_list = Users.objects.all()
        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = usersSerializers(rest_list, many=True)
        return Response(serializer.data)

    def get(self, request):
        rest_list = Users.objects.all()
        serializer = usersSerializers(rest_list, many=True)
        return Response(serializer.data)
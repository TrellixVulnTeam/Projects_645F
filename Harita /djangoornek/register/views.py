from django.shortcuts import render
from .models import Registers
from .serializers import registersSerializers
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from users.models import Users
# Create your views here.


class locationRegister(APIView):

    def post(self, request):

        print(request.data)
        length = len(request.data)
        print(length)
        value = Users.objects.filter(userName = "abcd")
        print(value[0])

        for i in range(0,length):
            print(request.data[i]["latitude"])
            print(request.data[i]["longitude"])
            p = Registers(latitude=request.data[i]["latitude"], langitute=request.data[i]["longitude"], foreignUser = value[0])
            p.save()

        return JsonResponse({'mesaj': '1'})

    def get(self, request):
        rest_list = Registers.objects.filter(foreignUser = 2)
        serializer = registersSerializers(rest_list, many=True)
        return render(request,"list.html",{'restlist':rest_list})
        #return Response(serializer.data)
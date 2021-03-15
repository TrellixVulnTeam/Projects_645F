from django.shortcuts import render
from rest_framework.views import APIView
from .models import Kullanicilar
from .serializers import kullanicilarSerializers
from rest_framework.response import Response
from django.http import JsonResponse
from django.core.mail import send_mail
import random

# Create your views here.
class KullaniciData(APIView):

    def post(self, request):

        Email = request.data["_parts"][0]
        Password = request.data["_parts"][1]



        print(Email)
        print(Password)

        rest_list = Kullanicilar.objects.filter(Email=Email[1].strip(), Sifre=Password[1])
        print(len(rest_list))

        if len(rest_list) >= 1:
            return JsonResponse({'message': '1'})
        else:
            return JsonResponse({'message': '0'})

    def get(self, request):
        rest_list = Kullanicilar.objects.all()
        serializer = kullanicilarSerializers(rest_list, many=True)
        return Response(serializer.data)

class KullaniciKayit(APIView):

    def post(self, request):

        Email = request.data["_parts"][0]
        Password = request.data["_parts"][1]
        Ad = request.data["_parts"][2]
        Soyad = request.data["_parts"][3]
        Tel = request.data["_parts"][4]



        print(Email)
        print(Password)
        print(Ad)
        print(Soyad)
        print(Tel)

        rest_list = Kullanicilar.objects.filter(Email=Email[1].strip())

        if len(rest_list) >= 1:
            return JsonResponse({'message': '0'})
        else:
            Kullanicilar.objects.create(Email=Email[1].strip(), Sifre=Password[1], Ad=Ad[1].strip(), Soyad=Soyad[1].strip(), Tel=Tel[1].strip())
            return JsonResponse({'message': '1'})

    def get(self, request):
        rest_list = Kullanicilar.objects.all()
        serializer = kullanicilarSerializers(rest_list, many=True)
        return Response(serializer.data)


class ForgetPassword(APIView):


    def post(self, request):
        Mail = request.data['Mail']


        rest_list = Kullanicilar.objects.filter(Email=Mail)
        if len(rest_list) >= 1:
            deger = ""
            for i in range(1, 10):
                rastgele = random.randint(1, 9)
                deger = deger + str(rastgele)

            send_mail('Şifremi Unuttum',
                      'Yeni Şifreniz: ' + deger,
                      'mucahit.tunel42@gmail.com',
                      [Mail.strip()],
                      fail_silently=False,
                      )

            Kullanicilar.objects.filter(Email=Mail.strip()).update(Sifre=deger)
            rest_list = Kullanicilar.objects.filter(Email=Mail.strip(), Sifre=deger)
            if len(rest_list) >= 1:
                return JsonResponse({'message': '1'})
            else:
                return JsonResponse({'message': '0'})

        else:
            return JsonResponse({'message': '-1'})




    def get(self, request):
        rest_list = Kullanicilar.objects.filter(id=1)
        serializer = kullanicilarSerializers(rest_list, many=True)
        return Response(serializer.data)


class CreateBookUser(APIView):
    def post(self, request):
        id = request.data['id']

        rest_list = Kullanicilar.objects.filter(id=id)
        serializer = kullanicilarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get(self, request):
        rest_list = Kullanicilar.objects.filter(id=1)
        serializer = kullanicilarSerializers(rest_list, many=True)
        return Response(serializer.data)


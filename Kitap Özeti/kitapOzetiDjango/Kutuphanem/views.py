from django.shortcuts import render
from rest_framework.views import APIView
from .models import Kutuphanem
from .serializers import kutuphanemSerializers
from rest_framework.response import Response
from Kullanicilar.models import Kullanicilar
from Kitaplar.models import Kitaplar
from Kitaplar.serializers import kitaplarSerializers
from django.http import JsonResponse

# Create your views here.
class KutuphaneData(APIView):

    def post(self, request):
        Mail = request.data['mail']

        Kid = Kullanicilar.objects.filter(Email=Mail).values("id")
        deger = Kid[0]["id"]

        rest_list = Kutuphanem.objects.filter(Kullanici_Id=deger).values("Kitap_Id")
        print(rest_list)

        Ids = []

        for i in range(len(rest_list)):
            Ids.append(rest_list[i]["Kitap_Id"])

        rest_list = Kitaplar.objects.filter(id__in = Ids)

        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get(self, request):
        rest_list = Kutuphanem.objects.all()
        serializer = kutuphanemSerializers(rest_list, many=True)
        return Response(serializer.data)


class FavoriteBookControl(APIView):
    def post(self, request):

        kitap_id = request.data["_parts"][0]
        email = request.data["_parts"][1]
        kId = Kullanicilar.objects.filter(Email=email[1]).values("id")

        deger = kId[0]["id"]
        print("********************************")
        print(type(deger))


        rest_list = Kutuphanem.objects.filter(Kullanici_Id=deger, Kitap_Id=kitap_id[1])
        if len(rest_list) >= 1:
            return JsonResponse({'message': '1'})
        else:
            return JsonResponse({'message': '0'})


    def get(self, request):
        rest_list = Kutuphanem.objects.all()
        serializer = kutuphanemSerializers(rest_list, many=True)
        return Response(serializer.data)



class FavoriteAdd(APIView):
    def post(self, request):

        kitap_id = request.data["_parts"][0]
        email = request.data["_parts"][1]


        Kid = Kullanicilar.objects.filter(Email=email[1]).values("id")
        deger = Kid[0]["id"]

        print(Kullanicilar.objects.get(Email=email[1]))

        rest_list = Kutuphanem.objects.filter(Kullanici_Id=deger, Kitap_Id=kitap_id[1])

        if len(rest_list) >= 1:
            Kutuphanem.objects.filter(Kullanici_Id=deger, Kitap_Id=kitap_id[1]).delete()
            return JsonResponse({'message': '0'})
        else:
            #Kutuphanem.objects.create(Kullanici_Id=kId, Kitap_Id=kitap_id[1])
            Kutuphanem.objects.create(Kullanici_Id=Kullanicilar.objects.get(Email=email[1]), Kitap_Id=kitap_id[1])
            return JsonResponse({'message': '1'})


    def get(self, request):
        rest_list = Kutuphanem.objects.all()
        serializer = kutuphanemSerializers(rest_list, many=True)
        return Response(serializer.data)


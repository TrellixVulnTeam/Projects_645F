from django.shortcuts import render
from rest_framework.views import APIView
from .models import Kitaplar
from .serializers import kitaplarSerializers
from rest_framework.response import Response
from django.http import JsonResponse
from Kullanicilar.models import Kullanicilar
import datetime

# Create your views here.
class KitaplarData(APIView):

    def post(self, request):

        rest_list = Kitaplar.objects.all()

        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return Response(serializer.data)

    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kitaplar.objects.all()[:5]
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

class KitaplarDetay(APIView):

    def post(self, request):
        id = request.data['id']
        id = int(id)

        rest_list = Kitaplar.objects.filter(id=id)
        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kitaplar.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

class MyBooks(APIView):

    def post(self, request):
        email = request.data['mail']
        Kid = Kullanicilar.objects.filter(Email=email).values("id")
        deger = Kid[0]["id"]

        rest_list = Kitaplar.objects.filter(Kitap_Olusturan_Id=deger)
        print(rest_list)

        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kitaplar.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)


class AddBook(APIView):



    def post(self, request):
        Email = request.data["_parts"][0]
        BookName = request.data["_parts"][1]
        BookAuthor = request.data["_parts"][2]
        BookType = request.data["_parts"][3]
        BookSummary = request.data["_parts"][4]
        now = datetime.datetime.now()

        hata = 0
        try:
            Kitaplar.objects.create(Kitap_Adi=BookName[1],
                                    Kitap_Yazari=BookAuthor[1],
                                    Kitap_Türü=BookType[1],
                                    Olusturma_Tarihi=now,
                                    Kitap_Ozeti=BookSummary[1],
                                    Kitap_Olusturan_Id=Kullanicilar.objects.get(Email=Email[1]))
        except:
            hata = 1

        if hata == 1:
            return JsonResponse({'message': '0'})
        else:
            return JsonResponse({'message': '1'})


    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kitaplar.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)



class Searching(APIView):


    def post(self, request):
        Tip = request.data["_parts"][0]
        aranacak = request.data["_parts"][1]

        print(Tip[1])
        print(aranacak[1])

        try:
            if Tip[1] == "Kitap":
                rest_list = Kitaplar.objects.filter(Kitap_Adi__contains = aranacak[1])
            else:
                rest_list = Kitaplar.objects.filter(Kitap_Yazari__contains = aranacak[1])
        except:
            print("hata")

        print(rest_list)

        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)


    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kitaplar.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)
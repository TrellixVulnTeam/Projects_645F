
from rest_framework.views import APIView
from .models import Kayitlarim
from .serializers import kitaplarSerializers
from rest_framework.response import Response
from django.http import JsonResponse
from Kullanicilar.models import Kullanicilar
from Kitaplar.models import Kitaplar
import datetime
# Create your views here.


class KayitEkle(APIView):

    def post(self, request):
        Email = request.data["_parts"][0]
        BookName = request.data["_parts"][1]
        BookAuthor = request.data["_parts"][2]
        BookType = request.data["_parts"][3]
        BookSummary = request.data["_parts"][4]

        kontrol = Kayitlarim.objects.filter(Kitap_Olusturan_Id = Kullanicilar.objects.get(Email=Email[1]))
        print(len(kontrol))

        if len(kontrol) < 2:
            hata = 0
            try:
                Kayitlarim.objects.create(Kitap_Adi=BookName[1],
                                          Kitap_Yazari=BookAuthor[1],
                                          Kitap_Türü=BookType[1],
                                          Kitap_Ozeti=BookSummary[1],
                                          Kitap_Olusturan_Id=Kullanicilar.objects.get(Email=Email[1]))
            except:
                hata = 1

            if hata == 1:
                return JsonResponse({'message': '0'})
            else:
                return JsonResponse({'message': '1'})
        else:
            return JsonResponse({'message': 'Fazla Kayit'})




    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kayitlarim.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)


class KayitlarimData(APIView):

    def post(self, request):
        Email = request.data["mail"]


        rest_list = Kayitlarim.objects.filter(Kitap_Olusturan_Id = Kullanicilar.objects.get(Email=Email))

        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)


    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kayitlarim.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

class EditKayit(APIView):
    def post(self, request):
        id = request.data["id"]

        rest_list = Kayitlarim.objects.filter(id=int(id))
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)



    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kayitlarim.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)

class SaveEdit(APIView):
    def post(self, request):
        id = request.data["_parts"][0]
        BookName = request.data["_parts"][1]
        BookAuthor = request.data["_parts"][2]
        BookType = request.data["_parts"][3]
        BookSummary = request.data["_parts"][4]
        hata = 0

        print(id[1])
        print(BookName[1])
        print(BookAuthor[1])
        print(BookType[1])
        print(BookSummary[1])

        try:
            Kayitlarim.objects.filter(id=int(id[1])).update(Kitap_Adi=BookName[1],
                                                         Kitap_Yazari= BookAuthor[1],
                                                         Kitap_Türü=BookType[1],
                                                         Kitap_Ozeti= BookSummary[1])
        except:
            hata = 1


        print(hata)

        if hata == 1:
            return JsonResponse({'message': '0'})
        else:
            return JsonResponse({'message': '1'})




    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kayitlarim.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)



class SendEdit(APIView):
    def post(self, request):

        id = request.data["id"]
        kayitlist = Kayitlarim.objects.filter(id=int(id)).values("Kitap_Adi",
                                                                 "Kitap_Yazari",
                                                                 "Kitap_Türü",
                                                                 "Kitap_Ozeti",
                                                                 "Kitap_Olusturan_Id")


        print(kayitlist[0])
        now = datetime.datetime.now()

        hata = 0

        try:
            Kitaplar.objects.create(Kitap_Adi=kayitlist[0]["Kitap_Adi"],
                                    Kitap_Yazari=kayitlist[0]["Kitap_Yazari"],
                                    Kitap_Türü=kayitlist[0]["Kitap_Türü"],
                                    Olusturma_Tarihi=now,
                                    Kitap_Ozeti=kayitlist[0]["Kitap_Ozeti"],
                                    Kitap_Olusturan_Id=Kullanicilar.objects.get(id=kayitlist[0]["Kitap_Olusturan_Id"])
                                    )
        except:
            hata = 1


        if hata == 0:
            try:
                Kayitlarim.objects.filter(id=int(id)).delete()
            except:
                hata = 1


        if hata == 0:
            return JsonResponse({'message': '1'})
        else:
            return JsonResponse({'message': '0'})






    def get(self, request):

        #limit koyma
        #rest_list = Kitaplar.objects.all().order_by('-id')[:1]

        rest_list = Kayitlarim.objects.all()
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)


from django.shortcuts import render
from rest_framework.views import APIView
from .models import Apriori
from .serializers import aprioriSerializers
from rest_framework.response import Response
from django.http import JsonResponse
from django.db import connection
from apyori import apriori
from Kitaplar.models import Kitaplar
from Kitaplar.serializers import kitaplarSerializers
import pandas

# Create your views here.
class AprioriData(APIView):

    def get(self, request):

        rest_list = Apriori.objects.all()
        print(rest_list)
        # rest_list = Urunler.objects.all()
        serializer = aprioriSerializers(rest_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        Kitapid = request.data["id"];
        query = Apriori.objects.filter(Kitap_Id=Kitapid).values("Kullanici_Id")
        arr = []
        dizi = []
        fulldizi = []
        for i in range(len(query)):
            arr.append(query[i]["Kullanici_Id"])
            #[1,2,3,4]
        deger = Apriori.objects.filter(Kullanici_Id__in=arr).values()
        for k in range(len(arr)):
            increment=0
            for j in range(len(deger)-1):
                if(arr[k] == deger[j]["Kullanici_Id_id"]):
                    dizi.append(deger[j]["Kitap_Id"])

            fulldizi.append(dizi)
            dizi = []
        print(fulldizi)
        pd = pandas.DataFrame(fulldizi)
        print(pd)
        t = []
        for i in range(0,len(arr)):
            t.append([str(pd.values[i,j]) for j in range(0,len(fulldizi[0]))])

        kurallar = apriori(t,min_support=0.1, min_confidence=0.02, min_lift=2, max_length=5)
        sonuc = list(kurallar)

        for i in range(len(sonuc)-1,0,-1):
            frozendeger = sonuc[i][0]
            frozenvalues= []
            floatfrozen = []
            intFrozen = []
            kontrol = 0

            for value in frozendeger:
                frozenvalues.append(value)

            for frozen in frozenvalues:
                floatfrozen.append(float(frozen))

            for frozenint in floatfrozen:
                print(frozenint)
                if frozenint != "":
                    intFrozen.append(int(frozenint))

            print(intFrozen)

            for k in intFrozen:
                if k == Kitapid:
                    kontrol=1
                    break

            if kontrol == 1:
                break


        rest_list = Kitaplar.objects.filter(id__in=intFrozen)
        serializer = kitaplarSerializers(rest_list, many=True)
        return JsonResponse(serializer.data, safe=False)
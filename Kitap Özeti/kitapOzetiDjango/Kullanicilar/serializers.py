from rest_framework import serializers
from .models import Kullanicilar

class kullanicilarSerializers(serializers.ModelSerializer):

    class Meta:
        model = Kullanicilar
        fields = '__all__'


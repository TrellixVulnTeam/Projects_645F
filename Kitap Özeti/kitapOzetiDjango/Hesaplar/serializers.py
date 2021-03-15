from rest_framework import serializers
from .models import Hesaplar

class hesaplarSerializers(serializers.ModelSerializer):

    class Meta:
        model = Hesaplar
        fields = '__all__'
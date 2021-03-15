from rest_framework import serializers
from .models import Kitaplar

class kitaplarSerializers(serializers.ModelSerializer):

    class Meta:
        model = Kitaplar
        fields = '__all__'
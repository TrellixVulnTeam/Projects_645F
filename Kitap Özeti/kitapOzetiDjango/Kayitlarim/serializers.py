from rest_framework import serializers
from .models import Kayitlarim

class kitaplarSerializers(serializers.ModelSerializer):

    class Meta:
        model = Kayitlarim
        fields = '__all__'
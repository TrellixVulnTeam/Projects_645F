from rest_framework import serializers
from .models import Sayac

class sayacSerializers(serializers.ModelSerializer):

    class Meta:
        model = Sayac
        fields = '__all__'
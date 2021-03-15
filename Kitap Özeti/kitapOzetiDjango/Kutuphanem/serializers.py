from rest_framework import serializers
from .models import Kutuphanem

class kutuphanemSerializers(serializers.ModelSerializer):

    class Meta:
        model = Kutuphanem
        fields = '__all__'
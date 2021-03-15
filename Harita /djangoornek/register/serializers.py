from rest_framework import serializers
from .models import Registers


class registersSerializers(serializers.ModelSerializer):
    class Meta:
        model = Registers
        fields = '__all__'
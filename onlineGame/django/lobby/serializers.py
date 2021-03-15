from rest_framework import serializers
from .models import Game

class gameSerializers(serializers.ModelSerializer):

    class Meta:
        model = Game
        fields = '__all__'
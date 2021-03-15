from rest_framework import serializers
from .models import Apriori

class aprioriSerializers(serializers.ModelSerializer):

    class Meta:
        model = Apriori
        fields = '__all__'
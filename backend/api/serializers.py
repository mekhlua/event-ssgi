from rest_framework import serializers
from .models import *

class SpeakerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Speaker
        fields = '__all__'

class ScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Schedule
        fields = '__all__'

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class RegistrantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registrant
        fields = '__all__'

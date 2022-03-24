from dataclasses import field
from operator import imod
from pyexpat import model
from statistics import mode
from rest_framework import serializers
from polls.models import StatusLedRed, InforSensor, ControlBoard, InformationPlant

class StatusLedRedSerializer(serializers.ModelSerializer):
    class Meta:
        model = StatusLedRed
        fields = ['status_led']
        

class InforSensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = InforSensor
        fields = ['nhiet_do', 'do_am', 'anh_sang']

class ControlBoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ControlBoard
        fields = ['Plant', 'Pump', 'Mode', 'Brightness']

class InformationPlantSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformationPlant
        fields = ['Plant', 'nhiet_do', 'do_am', 'anh_sang'] 
from urllib import response
from django.shortcuts import render
from polls.models import StatusLedRed, InforSensor, ControlBoard
from polls.serializers import InforSensorSerializer, StatusLedRedSerializer, ControlBoardSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from . import mqtt
# print(InforSensor.objects.raw("SELECT * FROM polls_inforsensor"))

def index(request):
    return render(request, 'polls/template/index.html')

class StatusLedRedNow(APIView):
    def get(self, request, format=None):
        status_led_red_now = StatusLedRed.objects.last()
        leddata = StatusLedRedSerializer(status_led_red_now)
        return Response(leddata.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        print(type(request.data))
        add_new_status = StatusLedRedSerializer(data=request.data)
        tmp = json.dumps(request.data)
        if add_new_status.is_valid():
            mqtt.get_client().publish('esp8266/message',payload=tmp,qos=0)
            add_new_status.save()
            return Response(add_new_status.data, status=status.HTTP_201_CREATED)
        return Response(add_new_status.errors, status= status.HTTP_400_BAD_REQUEST)

class StatusSensorNow(APIView):
    def get(self, request, format=None):
        Infor_Sensor_Now = InforSensor.objects.last()
        data_sensor = InforSensorSerializer(Infor_Sensor_Now)
        return Response(data_sensor.data, status=status.HTTP_200_OK)

class NineTimeAgo(APIView):
    def get(self, request, format=None):
        nine_time_ago = InforSensor.objects.filter().order_by('-id')[:9]
        last_nice_time_ago = reversed(nine_time_ago)
        graphdata = InforSensorSerializer(last_nice_time_ago, many = True)
        return Response(graphdata.data, status= status.HTTP_200_OK)

class StatusControlNow(APIView):
    def get(self, request, format=None):
        Status_control_Now = ControlBoard.objects.last()
        print(Status_control_Now)
        data_control = ControlBoardSerializer(Status_control_Now)
        return Response(data_control.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        add_new_data_control = ControlBoardSerializer(data=request.data)
        data_control = json.dumps(request.data)
        if add_new_data_control.is_valid():
            add_new_data_control.save()
            mqtt.get_client().publish('esp8266/control',payload=data_control,qos=0)
            return Response(add_new_data_control.data, status=status.HTTP_201_CREATED)
        return Response(add_new_data_control.errors, status= status.HTTP_400_BAD_REQUEST)
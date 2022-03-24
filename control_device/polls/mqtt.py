from ast import If
import paho.mqtt.client as mqtt
import sqlite3
import json



def get_client():
    def on_connect(client, userdata, flags, rc):
        print("success")
    client = mqtt.Client()
    client.connect('broker.emqx.io', 1883, 60)
    client.on_connect = on_connect
    return client

def subcribe(client:mqtt.Client):
    def on_message(client, userdata, msg):
        from .models import InforSensor, ControlBoard, InformationPlant
        from .serializers import ControlBoardSerializer, InformationPlantSerializer
        from django.db import connection
        # if str(msg.topic) == "esp8266/message":
        pay = json.loads(msg.payload.decode("utf-8"))
        InforSensor(nhiet_do = pay["nhiet_do"], do_am= pay["do_am"], anh_sang=pay["anh_sang"]).save()
        last_control = ControlBoard.objects.last()
        last_data_control = ControlBoardSerializer(last_control)
        plant_name = last_data_control['Plant'].value
        cursor = connection.cursor()
        cursor.execute("SELECT*FROM polls_informationplant WHERE Plant = %s", [plant_name])
        row = cursor.fetchall()
        data_detail = row[0][3]
        # print(type(data_detail))
        if last_data_control['Mode'].value == "Auto":
            if pay['do_am'] < data_detail:
                ControlBoard(Plant = last_data_control['Plant'].value, Pump = "On", Mode = last_data_control['Mode'].value, Brightness = last_data_control['Brightness'].value).save()
                new_control = ControlBoard.objects.last()
                new_data_control = ControlBoardSerializer(new_control)
                data_new = json.dumps(new_data_control.data)
                print(data_new)
                client.publish('esp8266/control',payload=data_new,qos=0)
                # print(last_data_control['Plant'].value)
            if pay['do_am'] >= data_detail:
                ControlBoard(Plant = last_data_control['Plant'].value, Pump = "Off", Mode = last_data_control['Mode'].value, Brightness = last_data_control['Brightness'].value).save()
                new_control = ControlBoard.objects.last()
                new_data_control = ControlBoardSerializer(new_control)
                data_new = json.dumps(new_data_control.data)
                print(data_new)
                client.publish('esp8266/control',payload=data_new,qos=0)
                # print(last_data_control['Plant'].value)
                


    client.on_message = on_message
    client.subscribe('esp8266/message')

def publish(client:mqtt.Client,tmp):
    client.publish('esp8266/message',payload=tmp,qos=0)
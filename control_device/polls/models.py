from django.db import models

# Create your models here.
class StatusLedRed(models.Model):
    status_led = models.CharField(max_length=20)
    # time_public = models.DateTimeField()

class InforSensor(models.Model):
    nhiet_do = models.IntegerField()
    do_am = models.IntegerField()
    anh_sang = models.IntegerField()
    # time_publish = models.DateTimeField()

class ControlBoard(models.Model):
    Plant = models.CharField(max_length=20)
    Pump = models.CharField(max_length=20)
    Mode = models.CharField(max_length=20)
    Brightness = models.IntegerField()

class InformationPlant(models.Model):
    Plant = models.CharField(max_length=20)
    nhiet_do = models.IntegerField()
    do_am = models.IntegerField()
    anh_sang = models.IntegerField()
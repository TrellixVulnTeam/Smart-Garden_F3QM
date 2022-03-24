from django.contrib import admin
from .models import StatusLedRed, InforSensor, ControlBoard, InformationPlant
# Register your models here.

admin.site.register(StatusLedRed)
admin.site.register(InforSensor)
admin.site.register(ControlBoard)
admin.site.register(InformationPlant)

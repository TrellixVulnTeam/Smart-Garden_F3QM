from django.urls import path
from . import views

urlpatterns = [
    path('statusledred/', views.StatusLedRedNow.as_view()),
    path('', views.index, name='index'),
    path('inforsensor/', views.StatusSensorNow.as_view()),
    path('graph/', views.NineTimeAgo.as_view()),
    path('control/', views.StatusControlNow.as_view()),
]

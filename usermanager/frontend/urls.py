from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('AddUser/', views.index, name="AddUser"),
    path('EditUser/', views.index, name="EditUser"),
]

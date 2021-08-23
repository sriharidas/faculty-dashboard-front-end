from django.contrib import admin

from django.urls import path
from faculty import views

urlpatterns=[
    path('api/',views.hello_world,name="hello"),
    path('api/faculty/',views.Faculty.as_view(),name='faculty'),
    ]
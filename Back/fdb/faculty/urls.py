from django.http import request
from django.urls import path

from faculty import views


app_name = 'faculty'

urlpatterns = [
    path('lists/', views.FacultyListView.as_view()),
    path('dept/', views.dept,),
    path('designation/', views.designation,),
    path('cr/', views.cen_res,),
    path('status/', views.status,),
    path('update/',views.xl_upload,),
    path('json/',views.xl_json,),
]

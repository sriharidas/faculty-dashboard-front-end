from core.models import Faculty
from django_filters.rest_framework import DjangoFilterBackend
from faculty.filters import UserFilter
from rest_framework import generics
from faculty.serializers import FacultySerializer
from django.http import JsonResponse
import pandas as pd
import numpy as np
import json
        
class FacultyListView(generics.ListAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    filter_backends = [DjangoFilterBackend,]
    filterset_class = UserFilter
    #filterset_fields = ['faculty_id', 'name', 'designation', 'department', 'central_responsibility', 'status', 'date_of_joining', 'mobile_number', 'email' ]

def dept(request):
    data = list(Faculty.objects.values_list('department', flat=True).distinct().order_by('department')) # wrap in list(), because QuerySet is not JSON serializable
    return JsonResponse(data, safe=False)

def designation(request):
    data = list(Faculty.objects.values_list('designation', flat=True).distinct().order_by('designation'))
    return JsonResponse(data, safe=False)

def cen_res(request):
    data = list(Faculty.objects.values_list('central_responsibility', flat=True).distinct().order_by('central_responsibility')) # wrap in list(), because QuerySet is not JSON serializable
    return JsonResponse(data, safe=False)

def status(request):
    data = list(Faculty.objects.values_list('status', flat=True).distinct().order_by('status')) # wrap in list(), because QuerySet is not JSON serializable
    return JsonResponse(data, safe=False)

def xl_upload(request):
    
    df = pd.read_json(r'http://127.0.0.1:8000/api/faculty/json/')
    row_iter = df.iterrows()

    def check(a):
        if pd.isnull(a):
            return np.nan_to_num(a)
        else:
            if isinstance(a, int):
                return a
            elif isinstance(a, float):
                return a
            else:
                return None

    objs = [
        Faculty(
        faculty_id = row[1],
        name  = row['Faculty Name'],
        designation  = row['Designation'],
        department  = row['Department'],
        central_responsibility = row['Central Responsibility'],
        status = row['Status'],
        date_of_joining = pd.to_datetime(row["Date of Joining"]).strftime('%Y-%m-%d'),
        mobile_number = row['Mobile Number'],
        email = row['E-Mail'],
        FAP_2021_Score = row['FAP 2021 Score'],
        Feedback_2021_Score = row[11],
        FRP_2021 = row[12],
        FRS_2021 = check(row[13]),
    )
    for index, row in row_iter
    ]
    Faculty.objects.bulk_create(objs)
    data = list(Faculty.objects.values_list('name', flat=True).order_by('name'))
    return JsonResponse(data, safe=False)


def xl_json(request):
    df = pd.read_excel(r'D:/haridas/Projects/DataScience lab/facutlty_dashboard/faculty-dashboard/Faculty Dashboard.xlsx')
    js = df.to_json(orient='records')
    js = json.loads(js)
    return JsonResponse(js, safe=False)
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Faculty
from rest_framework import generics
from rest_framework import filters

from .serializers import FacultySerializer





@api_view(['GET'])
def hello_world(request):
    routes=[
        
        '/api/faculty_details',
        '/api/number'
    ]
    
    return Response(routes)



class Faculty(generics.ListCreateAPIView):
    
    search_fields = ['faculty_id','department']
    
    filter_backends = (filters.SearchFilter,)
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer
    

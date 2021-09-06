import django_filters

from core.models import Faculty

class UserFilter(django_filters.FilterSet):
    class Meta:
        model = Faculty
        fields = {
            'faculty_id': ['icontains'],
            'name': ['icontains',],
            "designation": ['icontains',],
            "department": ['icontains',],
            "central_responsibility": ['icontains',],
            "status": ['icontains',],
            "date_of_joining": ['exact', 'year__gte',],
            "mobile_number": ['icontains',],
            "email": ['icontains',],
            "FAP_2021_Score":['lte'],
            'Feedback_2021_Score':['lte'],
            "FRP_2021":['lte'],
            'FRS_2021':['lte']
        }
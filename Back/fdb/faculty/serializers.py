from django.utils.translation import ugettext_lazy as _

from rest_framework import serializers

from core.models import Faculty


class FacultySerializer(serializers.ModelSerializer):
    """Serializer for listing faculties"""
    class Meta:
        model = Faculty
        fields = '__all__'

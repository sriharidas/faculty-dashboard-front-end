from django.db import models

class Faculty(models.Model):
    faculty_id=models.CharField(max_length=1000)
    department=models.CharField(max_length=1000)
    name=models.CharField(max_length=1000)
    designation=models.CharField(max_length=1500)
    number=models.CharField(max_length=500)
    email=models.EmailField(max_length=500)
    #joined=models.DateField(blank=True)

    def __str__(self):
        return self.department

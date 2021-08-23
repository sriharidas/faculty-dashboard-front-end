from django.contrib import admin
from faculty.models import Faculty
# Register your models here.
from import_export.admin import ImportExportModelAdmin

# Register your models here.

# admin.site.register(item)
@admin.register(Faculty)
class ViewAdmin(ImportExportModelAdmin):
    pass
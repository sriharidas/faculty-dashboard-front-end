# Generated by Django 3.2.7 on 2021-09-03 15:27

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0013_auto_20210903_2050'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('faculty_id', models.CharField(max_length=100, validators=[django.core.validators.RegexValidator('^[0-9a-zA-Z]*$', 'Only alphanumeric characters are allowed.')], verbose_name='Faculty Id')),
                ('name', models.CharField(default=None, max_length=255, verbose_name='Faculty Name')),
                ('designation', models.CharField(default=None, max_length=255, verbose_name='Designation')),
                ('department', models.CharField(default=None, max_length=255, verbose_name='Department')),
                ('central_responsibility', models.CharField(default=None, max_length=100, null=True, verbose_name='Central Responsibility')),
                ('status', models.CharField(default=None, max_length=50, null=True, verbose_name='Status')),
                ('date_of_joining', models.DateField(default=None, null=True, verbose_name='Date of Joining')),
                ('mobile_number', models.CharField(default=None, max_length=20, null=True, verbose_name='Mobile Number')),
                ('email', models.EmailField(max_length=254, verbose_name='E-Mail')),
                ('FAP_2021_Score', models.DecimalField(blank=True, decimal_places=2, default=None, max_digits=4, null=True, verbose_name='FAP 2021 Score')),
                ('Feedback_2021_Score', models.DecimalField(blank=True, decimal_places=2, default=None, max_digits=3, null=True, verbose_name='Feedback 2021 Score')),
                ('FRP_2021', models.DecimalField(blank=True, decimal_places=2, default=None, max_digits=3, null=True, verbose_name='FRP 2021')),
                ('FRS_2021', models.DecimalField(blank=True, decimal_places=0, default=None, max_digits=6, null=True, verbose_name='FRS 2021')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

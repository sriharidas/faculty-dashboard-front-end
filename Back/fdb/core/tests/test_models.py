from django.test import TestCase
from django.contrib.auth import get_user_model

from core import models


def sample_user(email='testuser@gmail.com', password='testpass'):
    """Create a sample user"""
    return get_user_model().objects.create_user(email, password)


class ModelTests(TestCase):

    def test_create_user_with_email_successful(self):
        """Test creating a new user with an email is successful"""
        email = 'testemail@gmail.com'
        password = 'password'
        user = get_user_model().objects.create_user(
            email=email,
            password=password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_new_user_email_normalized(self):
        """Test the email for new user is normalized"""
        email = 'testemail@GMAIL.COM'
        user = get_user_model().objects.create_user(email, 'password')

        self.assertEqual(user.email, email.lower())

    def test_new_user_invalid_email(self):
        """Test creating user with no email raises error """
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(None, 'password')

    def test_create_new_superuser(self):
        """Test creating a new superuser"""
        user = get_user_model().objects.create_superuser(
            'testemail@gmail.com',
            'testpass'
        )

        self.assertTrue(user.is_superuser)
        self.assertTrue(user.is_staff)

    def test_faculty_str(self):
        """Test the faculty string representation"""
        faculty = models.Faculty.objects.create(
            faculty_id='CS1234',
            name='TestFaculty',
            designation='HOD',
            department='Computer Science and Engineering',
            central_responsibility='',
            status='',
            date_of_joining='2008-05-28',
            mobile_number='9187654321',
            email='hodbit@gmail.com',
            FAP_2021_Score=0.54,
            FRP_2021=1.00,
            FRS_2021=14
        )
        self.assertEqual(str(faculty), faculty.department)



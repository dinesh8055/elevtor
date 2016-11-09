from django.db import models

import json
from jsonfield import JSONField


# Create your models here.
class Login(models.Model):
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)


class User(models.Model):
    login = models.ForeignKey(Login, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=10)
    education = models.CharField(max_length=2048)
    current_position = models.CharField(max_length=255)
    current_salary = models.IntegerField(default=0)
    current_salary_currency = models.CharField(max_length=5)
    current_salary_period = models.CharField(max_length=5)
    desired_position = models.CharField(max_lengh=255)
    desired_salary = models.IntegerField(default=0)
    desired_salary_currency = models.CharField(max_length=3)
    desired_salary_period = models.CharField(max_length=5)
    video_link = models.FileField(upload_to = 'videos')
    profile_image_link = models.ImageField(upload_to = 'pictures')
    CV_link = models.FileField(upload_to = 'cvs')
    LinkedIn_profile = models.URLField(max_length=255)
    GitHib_profile = models.URLField(max_length=255)
    Twitter_profile = models.URLField(max_length=255)
    Facebook_profile = models.URLField(max_length=255)
    Dribble_profile = models.URLField(max_length=255)
    Behance_profile = models.URLField(max_length=255)
    personal_website = models.URLField(max_length=255)
    personal_blog = models.URLField(max_length=255)
    # isDisabled=


class Skill(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    first_skill = models.CharField(max_length=50)
    second_skill = models.CharField(max_length=50)
    third_skill = models.CharField(max_length=50)
    fourth_skill = models.CharField(max_length=50)
    fifth_skill = models.CharField(max_length=50)


class Interview(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    job_id = models.ForeignKey(Jobs, on_delete=models.CASCASE)
    # email - will this be the same as login?
    # interviewer - FK
    scheduled_date = models.DateTimeField()
    completed_date = models.DateTimeField()
    video_link = models.FileField()
    recording_link = models.FileField()
    user_feedback =  models.CharField(max_length=255)# feedback from the user to manager
    manager_feedback =  models.CharField(max_length=255)# feedback from manager to user
    interview_status =  models.CharField(max_length=10)


class Jobs(models.Model):
    job_id = models.IntegerField(default=0)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=4096)
    job_type = models.CharField(max_length=45)
    location = models.CharField(max_length=45)
    salary = models.IntegerField(default=0)
    currency = models.CharField(max_length=3)
    salary_period = models.CharField(max_length=5)
    # company_id - FK
    # manager - FK
    video_link = models.CharField(max_length=255)
    # expiration_date=
    # company_address - FK
    # promoted =
    # promoted_end_date =
    # promoted_times
    # isActive=

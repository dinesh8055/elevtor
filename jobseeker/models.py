from django.db import models

# Create your models here.
class Login(models.Model):
    email=models.EmailField(max_length=100)
    password=models.CharField(max_length=100)

class User(models.Model):
    login = models.ForeignKey(Login, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    zipcode=models.CharField(max_length=10)
    education=models.CharField(max_length=2048)
    current_position=models.CharField(max_length=255)
    current_salary=models.IntegerField(default=0)
    current_salary_currency=models.CharField(max_length=5)
    current_salary_period=models.CharField(max_length=5)

    #remaining fields

class Skill(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    first_skill=models.CharField(max_length=50
    second_skill = models.CharField(max_length=50)
    third_skill = models.CharField(max_length=50)
    fourth_skill = models.CharField(max_length=50)
    fifth_skill = models.CharField(max_length=50)

class Interview(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)

    #remaining fields

class Jobs(models.Model):

    #remaining fields
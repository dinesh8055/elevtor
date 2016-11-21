from django.conf import settings

from rest_framework.authtoken.models import Token as DefaultTokenModel

from .utils import import_callable

from django.contrib.auth.models import User

TokenModel = import_callable(
    getattr(settings, 'REST_AUTH_TOKEN_MODEL', DefaultTokenModel))

class Information(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=100)
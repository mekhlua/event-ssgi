from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone

# This will add created_at field if you want to use it
created_at = models.DateTimeField(default=timezone.now)


class Speaker(models.Model):
    name = models.CharField(max_length=100)
    bio = models.TextField()
    photo = models.ImageField(upload_to='speakers/', null=True, blank=True)
    twitter = models.URLField(max_length=200, null=True, blank=True)
    linkedin = models.URLField(max_length=200, null=True, blank=True)
    github = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.name


class Schedule(models.Model):
    day = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return f"{self.day}: {self.title}"


class Location(models.Model):
    name = models.CharField(max_length=100)
    address = models.TextField()
    map_url = models.URLField(blank=True, null=True)


# ✅ Updated Registrant model as a custom user
class Registrant(AbstractUser):
    email = models.EmailField(unique=True)

    # Optional: add extra fields if needed
    # phone_number = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.username

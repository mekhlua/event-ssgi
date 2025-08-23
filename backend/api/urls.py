from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SpeakerViewSet, ScheduleViewSet, LocationViewSet, RegistrantViewSet


# Create a router and register our viewsets
router = DefaultRouter()
router.register(r'speakers', SpeakerViewSet, basename='speaker')
router.register(r'schedule', ScheduleViewSet, basename='schedule')
router.register(r'locations', LocationViewSet, basename='location')
router.register(r'register', RegistrantViewSet, basename='register')  # if you have registration

# The API URLs are now determined automatically by the router
urlpatterns = [
    path('', include(router.urls)),
]

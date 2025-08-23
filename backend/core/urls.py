# core/urls.py
from django.urls import path, include
from django.contrib import admin
from .views import home
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('', home), 
    path('admin/', admin.site.urls),  # ✅ This enables the admin panel
    path('api/', include('api.urls')),
    # include all API endpoints
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('woordle', include('woordle.urls')),
    path('', include('core.urls'))
]

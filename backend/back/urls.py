from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'emulator-state', views.EmulatorStateViewSet)
router.register(r'processes', views.ProcessViewSet)
router.register(r'files', views.FileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
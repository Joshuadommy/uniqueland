from django.urls import path
from .views import HomePageView, ComingSoonView

urlpatterns = [
    path('', HomePageView.as_view(), name='home'),
    path('coming-soon', ComingSoonView.as_view(), name='coming-soon'),
]
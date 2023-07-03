from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.logo, name="logo"),
    path('doctor/register', views.register, name='register'),
    path('doctor/login', views.login, name="login"),
    path('doctor/home', views.home, name='home'),
    path('doctor/advice', views.advice, name='advice'),
    path('doctor/book', views.booking, name='book'),
    path('doctor/caregivers', views.caregivers, name='caregivers'),
    path('doctor/profile', views.profile, name='profile'),
    path('doctor/messages', views.messages, name='messages'),
    path('doctor/survey',views.survey, name='survey'),
    path('doctor/image', views.image, name='image'),
    path('doctor/autistic', views.autistic, name='autistic'),
]

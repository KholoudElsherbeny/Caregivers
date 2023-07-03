from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # path('logo', views.logo, name="logo"),
    path('register', views.register, name='registerPatient'),
    path('login', views.login, name="loginPatient"),
    path('home', views.home, name='homePatient'),
    path('advice', views.advice, name='advicePatient'),
    path('book', views.booking, name='bookPatient'),
    path('caregivers', views.caregivers, name='caregiversPatient'),
    path('profile', views.profile, name='profilePatient'),
    path('messages', views.messages, name='messagesPatient'),
    path('survey',views.survey, name='surveyPatient'),
    path('image', views.image, name='imagePatient')
]
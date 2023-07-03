from django.shortcuts import render

# Create your views here.

def logo(request):
    #return HttpResponse('hello')
    return render(request, 'logo.html')
def register(request):
    return render(request, 'register.html')
def login(request):
    return render(request, 'login.html')
def home(request):
    return render(request , 'home.html')
def advice(request):
    return render(request, 'advice.html')
def booking(request):
    return render(request, 'bookDoctor.html')
def caregivers(request):
    return render(request, 'caregivers.html')
def profile(request):
    return render(request, 'profile.html')
def messages(request):
    return render(request, 'messages.html')
def survey(request):
    return render(request, 'survey.html')
def image(request):
    return render(request, 'image.html')
def autistic(request):
    return render(request, 'autistic.html')
from django.urls import path

from apps.home.views import Home

urlpatterns = [

    path('', Home),

]
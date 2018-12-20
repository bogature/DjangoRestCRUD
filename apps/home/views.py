from django.http import HttpResponse, request
from django.shortcuts import render
from rest_framework import generics


def Home(request):
    context = {
    }
    return render(request, 'home.html', context)

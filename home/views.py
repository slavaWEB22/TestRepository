from django.shortcuts import render
from products.models import Products
# Create your views here.
def display(request):

    prod = Products.objects.all()

    return render(request,"home/home.html",{"prod":prod})
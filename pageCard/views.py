from django.shortcuts import render
from products.models import Products
from photoProd.models import ListPhoto

# Create your views here.
def showPageCard(request,pk):
    prod = Products.objects.get(id=pk)
    listProd = ListPhoto.objects.filter(prod = pk)
    return render(request,"pageCard/pageCard.html",{"prod":prod,"listProd":listProd})
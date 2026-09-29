from django.db import models
from products.models import Products
# Create your models here.
class ListPhoto(models.Model):
    photo = models.ImageField(upload_to="list_prod")
    prod = models.ForeignKey(Products,on_delete=models.DB_CASCADE)

    def __str__(self):
        return self.prod.name
from django.db import models
from categories.models import Categories

# Create your models here.
class Products(models.Model):
    name = models.CharField(max_length=100)
    article = models.CharField(max_length=100,blank=True)
    price = models.PositiveIntegerField()
    photo = models.ImageField(upload_to="productsPhoto")
    count = models.PositiveIntegerField(default=0)
    categories = models.ForeignKey(Categories,on_delete=models.DB_CASCADE,null=True)

    def __str__(self):
        return self.name
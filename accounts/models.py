from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Person(models.Model):
    user = models.OneToOneField(
                                   User,
                                   on_delete=models.DB_CASCADE,
                               )
    tel = models.CharField(max_length=10)

    class Meta:
        db_table = 'person'

    def __str__(self):
        return f'name: {self.user} - phone: {self.tel}'

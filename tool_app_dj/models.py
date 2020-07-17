from django.db import models

# Create your models here.
class ToolBox(models.Model):
    name = models.CharField(max_length=120)
    make = models.CharField(max_length=120)
    cost = models.CharField(max_length=120)
    location = models.CharField(max_length=120)
    type = models.CharField(max_length=120)
    image = models.CharField(max_length=120)

    def __str__(self):
        return self.name

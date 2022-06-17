from statistics import mode
from django.db import models

# Create your models here.

class Productos(models.Model):                       ### Productos es el nombre que va a tener la tabla en tu base de datos
    nombre = models.CharField(max_length=30)
    descripcion =models.CharField(max_length=30)   ### creando dato varchar
    disponible = models.BooleanField()    ###  creando booleano
    fechaIncorporacion = models.DateField()   ### CREANDO DATO FECHA
    correoProveedor = models.EmailField()   #### CREANDO DATO CORREO 
    
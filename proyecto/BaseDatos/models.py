from statistics import mode
from django.db import models

# Create your models here.

class Productos(models.Model):                       ### Productos es el nombre que va a tener la tabla en tu base de datos
    nombre = models.CharField(max_length=30)
    descripcion =models.CharField(max_length=30)   ### creando dato varchar
    disponible = models.BooleanField()    ###  creando booleano
    fechaIncorporacion = models.DateField()   ### CREANDO DATO FECHA
    CORREOpORVEEDOR = models.EmailField()   #### CREANDO DATO CORREO 
    
class Productos2(models.Model):
    nombre2 = models.CharField(max_length=300)
    descripcion2 =models.CharField(max_length=300)
    disponible2 = models.BooleanField()
    fechaIncorporacion2 = models.DateField()
    correoProveedor = models.EmailField()
    
class Boleta(models.Model):
    idBoleta = models.CharField(max_length=300)
    vendedor = models.CharField(max_length=300)  
    fechaVenta = models.DateField()
    montoTotal = models.CharField(max_length=300) 
    totalProductos = models.CharField(max_length=300)
    
class Vendedor(models.Model):
    idVendedor = models.CharField(max_length=300)
    nombreVendedor = models.CharField(max_length=300)  
    fechaCotratacion = models.DateField()
    totalVentas = models.CharField(max_length=300) 
    direccion = models.CharField(max_length=300)
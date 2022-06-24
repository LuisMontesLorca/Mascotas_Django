from django.http import HttpResponse
from django.template import Template, Context
from django.shortcuts import render
from BaseDatos.models import Productos
from BaseDatos.models import Productos2
from BaseDatos.models import Boleta
from BaseDatos.models import Vendedor


def inicio(request):
    return render(request,"index.html")

def historial(request):
    return render(request,"historial.html") 

def productos(request):
    return render(request,"Productos.html")

def login(request):
    return render(request,"login.html")

def Seguimiento(request):
    return render(request,"Seguimiento.html")

def Register(request):   
    doc_externo =open("static/Register.html")
    plt = Template(doc_externo.read())         ### esto es lo mismo de arriba pero con mas texto
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def resultado(request):
    productos = Productos2.objects.all #( nombre2__icontains="LIVING WORLD NIDO DE BAMBU", )
    contexto = {'datos':productos,}
    return render(request,"resultado.html", contexto)

def boleta(request):
    productos = Boleta.objects.filter(vendedor__icontains="vendedor 1")
    contexto = {'datos':productos,}
    return render(request,"resultado2.html", contexto)

def vendedor(request):
    productos = Vendedor.objects.filter(nombreVendedor__icontains="vendedor 1")
    contexto = {'datos':productos,}
    return render(request,"resultado3.html", contexto)

def usuarioLogueado(request):
    correo = f'se ha logueado el usuario {request.GET["email"]}'
    contraseña = f'se ha logueado el usuario {request.GET["contraseña"]}'
    contexto = {'datos':correo,}
    contexto2 = {'datos':contraseña,}
    return render(request,"usuario_logueado.html", contexto)
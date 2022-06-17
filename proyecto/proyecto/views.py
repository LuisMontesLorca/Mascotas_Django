from django.http import HttpResponse
from django.template import Template, Context
from django.shortcuts import render
from BaseDatos.models import Productos

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
    ##palabra = f'se ha logueado el usuario {request.GET["email"]}'
    llamadabd = Productos.objects.filter(nombre_incontains = "pelota")
    contexto = {'datos':llamadabd,}
    return render(request,"static/resultado.html", contexto)

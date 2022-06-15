from django.http import HttpResponse
from django.template import Template, Context

def inicio(request):
    doc_externo =open("static/index.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def historial(request):
    doc_externo =open("static/historial.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def productos(request):
    doc_externo =open("static/Productos.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context({"nombre": "luis", "lista":["elemento1", "elemento2", "elemento3"]})
    documento = plt.render(ctx)
    return HttpResponse(documento)

def login(request):
    doc_externo =open("static/login.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def Seguimiento(request):
    doc_externo =open("static/Seguimiento.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)

def Register(request):
    doc_externo =open("static/Register.html")
    plt = Template(doc_externo.read())
    doc_externo.close()
    ctx = Context()
    documento = plt.render(ctx)
    return HttpResponse(documento)


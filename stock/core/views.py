from django.shortcuts import render

# Create your views here.
def login(request):
  return render(request, "core/login.html")

def register(request):
  return render(request, "core/register.html")

def inventario(request):
  return render(request, "core/inventario.html")

def caja(request):
  return render(request, "core/caja.html")

def cajaProductos(request):
  return render(request, "core/cajaProductos.html")

def reporte(request):
  return render(request, "core/reporte.html")
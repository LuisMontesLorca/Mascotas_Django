const detalle = [
    {
      "Nombre": "LIVING WORLD NIDO DE BAMBU",
      "Marca": "HAGEN",
      "Precio": "4.400",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/14143556.jpg",
      "Fecha" : "13/5/2021"
    },  
    {
        "Nombre": "LIVING WORLD NIDO DE BAMBU",
        "Marca": "HAGEN",
        "Precio": "4.400",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/14143556.jpg",
        "Fecha" : "17/5/2021"
      },  
      {
        "Nombre": "LIVING WORLD NIDO DE BAMBU",
        "Marca": "HAGEN",
        "Precio": "4.400",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/14143556.jpg",
        "Fecha" : "18/5/2021"
      },  
    {
      "Nombre": "POLERON HURON",
      "Marca": "GRUPOMOR",
      "Precio": "14.990",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/0310025204_huron-poleron-rojo.jpg",
      "Fecha" : "18/1/2021"
    },
    {
        "Nombre": "POLERON HURON",
        "Marca": "GRUPOMOR",
        "Precio": "14.990",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/0310025204_huron-poleron-rojo.jpg",
        "Fecha" : "22/3/2021"
      },

    {
      "Nombre": "EXO TERRA KIT INICIO DRAGON BARBUDO",
      "Marca": "HAGEN",
      "Precio": "314.050",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/14144363.png",
      "Fecha" : "22/2/2022"
    },
    {
        "Nombre": "EXO TERRA KIT INICIO DRAGON BARBUDO",
        "Marca": "HAGEN",
        "Precio": "314.050",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/14144363.png",
        "Fecha" : "15/3/2022"
      },
    {
      "Nombre": "EXO TERRA FILTRO INTERNO",
      "Marca": "HAGEN",
      "Precio": "23.440",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/14142993.jpg",
      "Fecha" : "25/8/2022"
    },

    {
      "Nombre": "HABITRAIL OVO LOFT-V",
      "Marca": "HAGEN",
      "Precio": "53.150",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/14142778.png",
      "Fecha" : "01/10/2021"
    },
    {
        "Nombre": "HABITRAIL OVO LOFT-V",
        "Marca": "HAGEN",
        "Precio": "53.150",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/14142778.png",
        "Fecha" : "25/10/2021"
      },
    {
      "Nombre": "HAMACA HURON PIRATA",
      "Marca": "ANIMAL CARE",
      "Precio": "34.190",
      "Imagen": "https://www.pethappy.cl/imagenes/productos/48050016.png",
      "Fecha" : "22/2/2022"
    },
    {
        "Nombre": "HAMACA HURON PIRATA",
        "Marca": "ANIMAL CARE",
        "Precio": "34.190",
        "Imagen": "https://www.pethappy.cl/imagenes/productos/48050016.png",
        "Fecha" : "22/2/2022"
      }
]


var texto_iterable=""

detalle.forEach((element) => {

    var tarjetita_html = `<div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${element.Imagen}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">${element.Nombre}</h5>
          <p class="card-text">Marca: ${element.Marca}</p>
          <p class="card-text">Precio: $${element.Precio}</p>
          <p class="card-text">Fecha venta: ${element.Fecha}</p>
        </div>
      </div>
    </div>`
    
    texto_iterable += tarjetita_html
    $("#productos").html( texto_iterable )
});

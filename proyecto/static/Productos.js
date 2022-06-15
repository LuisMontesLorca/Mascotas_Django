const productos = [
    {
      Nombre: "LIVING WORLD NIDO DE BAMBU",
      Marca: "HAGEN",
      SKU: "14143556",
      Precio: "4.400",
      Descripcion: "Nido de Bambú para los pinzones ofrece un refugio cómodo y seguro para parejas reproductoras y sus crías.",
      Stock: "2",
      Imagen: "https://www.pethappy.cl/imagenes/productos/14143556.jpg"
    },  
    {
      Nombre: "POLERON HURON",
      Marca: "GRUPOMOR",
      SKU: "45560260",
      Precio: "14.990",
      Descripcion: "Lindo polerón rojo para hurones.",
      Stock: "1",
      Imagen: "https://www.pethappy.cl/imagenes/productos/0310025204_huron-poleron-rojo.jpg"
    },
    {
      Nombre: "EXO TERRA KIT INICIO DRAGON BARBUDO",
      Marca: "HAGEN",
      SKU: "14144363",
      Precio: "314.050",
      Descripcion: "El Kit Exo Tierra incluye todo lo que necesitas para comenzar. Medidas: 90x54x30 CM",
      Stock: "2",
      Imagen: "https://www.pethappy.cl/imagenes/productos/14144363.png"
    },
    {
      Nombre: "EXO TERRA FILTRO INTERNO",
      Marca: "HAGEN",
      SKU: "14142993",
      Precio: "23.440",
      Descripcion: "El Filtro Reptil Clear Exo Terra es un sistema ótimo de filtración del agua, con gran volumen de filtrado y un efectivo control del flujo.",
      Stock: "3",
      Imagen: "https://www.pethappy.cl/imagenes/productos/14142993.jpg"
    },
    {
      Nombre: "ARNES/CHAQUETA HURON COLORES",
      Marca: "ANIMAL CARE",
      SKU: "45560230",
      Precio: "19.990",
      Descripcion: "Ferret Walking Jacket es para los hurones que aman la emoción del medio ambiente",
      Stock: "1",
      Imagen: "https://www.pethappy.cl/imagenes/productos/0310021119_ARNES.jpg"
    },
    {
      Nombre: "HABITRAIL OVO LOFT-V",
      Marca: "HAGEN",
      SKU: "14142778",
      Precio: "53.150",
      Descripcion: "Habitrail OVO Loft es un espacio que proporciona un ambiente en el hogar para juego, ideal diseñado específicamente para los hámsters . ",
      Stock: "2",
      Imagen: "https://www.pethappy.cl/imagenes/productos/14142778.png"
    },
    {
      Nombre: "JAULA TIPO FAROL SIN BASE NEGRA",
      Marca: "ANIMAL CARE",
      SKU: "45560079",
      Precio: "149.990",
      Descripcion: "Jaula Tipo Farol - Negra. Proporciona la mejor comodidad y diversión a tu mascota. Es un cálido hogar para tu mascota.",
      Stock: "1",
      Imagen: "https://www.pethappy.cl/imagenes/productos/45560079.png"
    },
    {
      Nombre: "HAMACA HURON PIRATA",
      Marca: "ANIMAL CARE",
      SKU: "48050016",
      Precio: "34.190",
      Descripcion: "Marshall Pirate Ship es un encantador juguete en forma de barco pirata para que tu hurón sea el espadachín y sea parte de este divertido juego que le permite retozar, escalar y esconderse.",
      Stock: "2",
      Imagen: "https://www.pethappy.cl/imagenes/productos/48050016.png"
    }
]


var texto_iterable=""

productos.forEach((element) => {

    var tarjetita_html = `<div class="col">
    <div class="card" style="width: 18rem;">
        <img src="${element.Imagen}" class="card-img-top" alt="foto">
        <div class="card-body">
          <h5 class="card-title">${element.Nombre}</h5>
          <p class="card-text">Marca: ${element.Marca}</p>
          <p class="card-text">SKU: ${element.SKU}</p>
          <p class="card-text">${element.Descripcion}</p>
          <p class="card-text">Precio: $${element.Precio}</p>
          <p class="card-text">Stock: ${element.Stock}</p>
          <a href="#" class="btn btn-primary" onclick="apretarboton('${element.Nombre}','${element.Precio}')">Añadir al carrito</a>
        </div>
      </div>
    </div>`
    
    texto_iterable += tarjetita_html
    $("#productos").html( texto_iterable )
});

function apretarboton(nombre,precio){
  alert(`El producto pinchado es: ${nombre} \n Su precio es: $ ${precio}`)
}

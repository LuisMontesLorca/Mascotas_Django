var ordenes= [
  {nombre:"LIVING WORLD NIDO DE BAMBU" , estado:"enviado", clase:"estadoVerde", imagen: "https://www.pethappy.cl/imagenes/productos/14143556.jpg"},
  {nombre:"POLERON HURON" , estado:"en camino",clase:"estadoAzul", imagen: "https://www.pethappy.cl/imagenes/productos/0310025204_huron-poleron-rojo.jpg"},
  {nombre:"ARNES/CHAQUETA HURON COLORES" , estado:"entregado",clase:"estadoPurpura", imagen: "https://www.pethappy.cl/imagenes/productos/0310021119_ARNES.jpg"},
]


var acomulador_texto=""

ordenes.forEach((element, index) => {

    var html_producto = `
    <tr>
      <th scope="row">${index}</th>
      <td>  <img src="${element.imagen} class="card-img-top" alt="imagen" width="50" height="50">  ${element.nombre}</td>
      <td class="${element.clase}">${element.estado}</td>
    </tr>`
    
    acomulador_texto += html_producto
    $("#seguimiento").html( acomulador_texto )
});

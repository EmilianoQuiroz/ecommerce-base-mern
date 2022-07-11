const carrito = [];
const arrayDeProductos = [{id:1, titulo:"Hoodie Audere", precio: 4500, imagen: "img/img-hoodie-1.jpg", description: "Some quick example text to build on the card title and make up the bulk of the card's content."},
];

let acumulador = ``;
arrayDeProductos.forEach((producto) => {
    acumulador += `
    <div class="col d-flex justify-content-center mb-4">
    <div class="card shadow mb-1 bg-black rounded" style="width: 20rem;">
      <h5 class="card-title pt-2 text-center text-secondary">${producto.titulo}</h5>
      <img src=${producto.imagen} class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text text-white-50 description">${producto.description}</p>
        <h5 class="text-primary">Precio: <span class="precio${producto.precio}</span></h5>
        <div class="d-grid gap-2">
        <button  class="btn btn-secondary button">Añadir a Carrito</button>
      </div>
      </div>
    </div>
  </div>
  `
});

document.getElementById('card-container').innerHTML = acumulador
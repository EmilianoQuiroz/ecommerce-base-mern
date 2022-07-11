//--- Generador de Cards ---//
const cardCarrito = [];
const arrayDeProductos = [{id:1, titulo:"Hoodie Audere", precio: 4500, imagen: "img/img-hoodie-1.jpg", description: "Hoodie modelo Audere tipo slim fit, variedad de colores y talles."},
                          {id:1, titulo:"Hoodie Black Style", precio: 5500, imagen: "img/img-hoodie-2.jpg", description: "Hoodie Black Style tipo slim fit, variedad de colores y talles."},
                          {id:1, titulo:"Hoodie White Style", precio: 3900, imagen: "img/img-hoodie-3.jpg", description: "Hoodie modelo White Style tipo over-size, solo en blanco y variedad de talles."},
                          {id:1, titulo:"Hoodie VisualBasic", precio: 4200, imagen: "img/img-hoodie-4.jpg", description: "Hoodie modelo VisualBasic, un escencial infaltable."},
                          {id:1, titulo:"Hoodie Green", precio: 4500, imagen: "img/img-hoodie-5.jpg", description: "Hoodie modelo Green tipo slim fit, variedad de talles."},
                          {id:1, titulo:"Campera Vintage", precio: 19500, imagen: "img/img-jacket-1.jpg", description: "Campera modelo Vintage tipo over-size, variedad de colores tierra."},
                          {id:1, titulo:"Campera Hover", precio: 24500, imagen: "img/img-jacket-2.jpg", description: "Campera modelo Hover tipo over-size, un clase infalible."},
                          {id:1, titulo:"Campera Montain", precio: 29500, imagen: "img/img-jacket-3.jpg", description: "Campera modelo Montain tipo over-size, talle unico."},
                          {id:1, titulo:"Campera Montain Mujer", precio: 34500, imagen: "img/img-jacket-4.jpg", description: "Campera modelo Montain Mujer tipo slim fit, variedad de talles."},
                          {id:1, titulo:"Campera Jean Mujer", precio: 14500, imagen: "img/img-jacket-5.jpg", description: "Campera modelo Jean Mujer tipo slim fit, variedad de talles."},
                          {id:1, titulo:"Campera Vintage Mujer", precio: 34500, imagen: "img/img-jacket-6.jpg", description: "Campera modelo Vintage Mujer tipo over-size, variedad de talles."},
                          {id:1, titulo:"Jean Slim Blue", precio: 14500, imagen: "img/img-jean-1.jpg", description: "Jean modelo Slim Blue tipo slim fit, variedad de colores y talles."},
                          {id:1, titulo:"Jean New Hood", precio: 21500, imagen: "img/img-jean-2.jpg", description: "Jean modelo New Hood tipo over-size, variedad de estampados y talles."},
                          {id:1, titulo:"Jean Mom", precio: 22500, imagen: "img/img-jean-3.jpg", description: "Jean modelo Mom tipo over-size, variedad de talles."},
                          {id:1, titulo:"Jean Savaje", precio: 21500, imagen: "img/img-jean-4.jpg", description: "Jean modelo Savaje tipo slim fit, variedad de roturas y talles."},
                          {id:1, titulo:"Jean Grey", precio: 18500, imagen: "img/img-jean-5.jpg", description: "Jean modelo Grey tipo over-size, variedad de estampados y talles."},
                          {id:1, titulo:"Remeras Estampadas", precio: 2500, imagen: "img/img-tshirt-1.jpg", description: "Remeras con estampados tipo slim fit, variedad de estampados y talles."},
                          {id:1, titulo:"Remera Whaitha", precio: 1500, imagen: "img/img-tshirt-2.jpg", description: "Remera modelo Whaitha tipo slim fit, variedad de frases y talles."},
                          {id:1, titulo:"Remera Black Style", precio: 1500, imagen: "img/img-tshirt-3.jpg", description: "Remera modelo Black Style tipo over-size, variedad de frases y talles."},
                          {id:1, titulo:"Remera Black Essential", precio: 1800, imagen: "img/img-tshirt-4.jpg", description: "Remera modelo Black Essential tipo slim fit, variedad de talles."}
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
        <h5 class="text-primary">Precio: <span class="precio">$ ${producto.precio}</span></h5>
        <div class="d-grid gap-2">
        <button  class="btn btn-secondary button">Añadir a Carrito</button>
      </div>
      </div>
    </div>
  </div>
  `
});

document.getElementById('card-container').innerHTML = acumulador

//--- Carrito ---//
const Clickbutton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem)
})


function addToCarritoItem(e){
  const button = e.target
  const item = button.closest('.card')
  const itemTitle = item.querySelector('.card-title').textContent;
  const itemPrice = item.querySelector('.precio').textContent;
  const itemImg = item.querySelector('.card-img-top').src;
  
  const newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  addItemCarrito(newItem)
}


function addItemCarrito(newItem){

  const alert = document.querySelector('.alert')

  setTimeout( function(){
    alert.classList.add('hide')
  }, 2000)
    alert.classList.remove('hide')

  const InputElemnto = tbody.getElementsByClassName('input__elemento')
  for(let i =0; i < carrito.length ; i++){
    if(carrito[i].title.trim() === newItem.title.trim()){
      carrito[i].cantidad ++;
      const inputValue = InputElemnto[i]
      inputValue.value++;
      CarritoTotal()
      return null;
    }
  }
  
  carrito.push(newItem)
  
  renderCarrito()
} 


function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".input__elemento").addEventListener('change', sumaCantidad)
  })
  CarritoTotal()
}

function CarritoTotal(){
  let Total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  carrito.forEach((item) => {
    const precio = Number(item.precio.replace("$", ''))
    Total = Total + precio*item.cantidad
  })

  itemCartTotal.innerHTML = `Total $${Total}`
  addLocalStorage()
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for(let i=0; i<carrito.length ; i++){

    if(carrito[i].title.trim() === title.trim()){
      carrito.splice(i, 1)
    }
  }

  const alert = document.querySelector('.remove')

  setTimeout( function(){
    alert.classList.add('remove')
  }, 2000)
    alert.classList.remove('remove')

  tr.remove()
  CarritoTotal()
}

function sumaCantidad(e){
  const sumaInput  = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if(item.title.trim() === title){
      sumaInput.value < 1 ?  (sumaInput.value = 1) : sumaInput.value;
      item.cantidad = sumaInput.value;
      CarritoTotal()
    }
  })
}

//--- Local Storage ---//
function addLocalStorage(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    renderCarrito()
  }
}
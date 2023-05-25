const productos = [
{    id: 1,
     nombre: "Pizza común", 
     precio: 1200
},
{    id: 2,
     nombre: "Pizza especial", 
     precio: 1800
},
{    id: 3,
     nombre: "Hamburgueza común",
     precio: 1000
},
{    id: 4,
     nombre: "Hamburgueza especial",
     precio: 1500
},
{    id: 5,
     nombre: "Papas fritas",
     precio: 800
}
];

const contenedorProductos = document.querySelector('#contenedor-productos');

const mostrarProductos = (data) => {
   data.forEach(producto =>{
    const cardProducto = document.createElement('div');
    cardProducto.setAttribute('id', 'tarjeta-producto');
    cardProducto.innerHTML = `
                              <div class="prod-description">
                              <h3 class="nombreProduct">${producto?.nombre}</h3>
                              <h3 class="precioProduct">$ ${producto?.precio}</h3>
                              <button id='${producto.id}' class="btn-compra">Comprar</button>
                              </div>`;
    contenedorProductos.appendChild(cardProducto);
   })
   const btnComprar = document.querySelectorAll('.btn-compra');
   btnComprar.forEach(el => {
    el.addEventListener('click', (e) => {
    agregarAlCarrito(e.target.id)
    
   });
})
}

mostrarProductos(productos);

const carrito = [];


const contenedorCarrito = document.querySelector('#contenedor-carrito');
        const contenidoCarrito = document.createElement('div');
        





function agregarAlCarrito(id){
    
   
        let prodEncontrado = productos.find(prod => prod.id === parseInt(id));
        carrito.push(prodEncontrado);
        let cantidad = carrito.length;
        
        total = carrito.reduce((tot, elem) => tot + elem.precio, 0);
        contenidoCarrito.innerHTML = `
                                      <h3 class="carrito">Total: $${total}</h3>
                                      <h5 class="cantidad">${cantidad} productos en el carrito</h5>`;
        contenedorCarrito.appendChild(contenidoCarrito);
        

        localStorage.setItem("product", JSON.stringify(total));
        localStorage.setItem("cantid", JSON.stringify(cantidad));
   
        let totalProduct = localStorage.getItem("product");
        let cantProduct = localStorage.getItem("cantid");

        console.log(totalProduct);
        console.log(cantProduct);

     
        
}

function eliminarProductos (){
        let elimin = document.querySelector('.btn-cancelar');
        elimin.addEventListener("click", () =>{
         let eliminado = document.querySelector('.carrito');
         eliminado.remove();
         let eliminado2 = document.querySelector('.cantidad');
         eliminado2.remove();
         carrito.length = 0;
        })
}

eliminarProductos();

let total = "";
let clave = "";





for(let i=0; i < localStorage.length; i++){
        clave = localStorage.key(i);
        console.log("Clave: " + clave);
        console.log("Valor: " + localStorage.getItem(clave));
}









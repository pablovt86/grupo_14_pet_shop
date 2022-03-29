
console.log('carrito connected success!');
const $ = (id) => document.getElementById(id);

const carrito = $('carrito');



const getCarrito = async () => {

    try {
        const response = await fetch('/api/cart/show')
        const result = await response.json()
        if (result.ok) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.log(error);
    }

}


const addItem = async (idproducts) => {

    try {
        const response = await fetch(`/api/cart/${idproducts}`, {
            method: 'POST'
        })
        const result = await response.json()

        console.log(result.data);
        if (result.ok) {

            cargarTabla(result.data)
        }

    } catch (error) {
        console.log(error);
    }

}

const removeItem = async (idproducts) => {

    try {

        const response = await fetch(`/api/cart/${idproducts}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }

    } catch (error) {
        console.log(error)
    }
}

const removeAllItem = async (id) => {

    try {
        const response = await fetch(`/api/cart/item/${id}`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error)
    }
}

const emptyCart = async () => {

    try {
        const response = await fetch(`/api/cart/empty`, {
            method: 'DELETE'
        })
        const result = await response.json()

        if (result.ok) {
            cargarTabla(result.data)
        }
    } catch (error) {
        console.error(error)
    }
}

const cargarTabla = (data) => {

    carrito.innerHTML = null;
    data.forEach(({ id, amount, image, nombre, price, total }) => {
        let item = `
      
        
        
        <div class="vista-articulo">
            <div class="imagen-cucha"><img src="../images/products/${image}" />
            <div class="accountant">
            <button class="button-accountant" id="increment-product"onclick="addItem('${id}')" >+</button>
            <span>${amount}</span>
            <button class="button-accountant" id="decrement-product"onclick="removeItem('${id}')"  >-</button>
        </div>
            </div>
          
        
        <div class="reseña">
        <div class="price-item""> <p>${nombre}</p></div>
            <div class="price-item"><p class="prices">$${price}</p></div>

            <div class="price-item"><p class="totals">$${total}</p></div>
        </div>    
        </div>
        <div class="tachito">
 <button class="delete"  onclick="removeAllItem('${id}')"><i class="fas fa-trash-alt"></i></button>
 </div>
`

        carrito.innerHTML += item
    });
    console.log(carrito);
}

carrito && getCarrito();

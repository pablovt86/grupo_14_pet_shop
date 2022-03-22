
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

// const removeItem = async (idproducts) => {

//     try {
        
//         const response = await fetch(`/api/cart/${idproducts}`, {
//             method: 'DELETE'
//         })
//         const result = await response.json()

//         if (result.ok) {
//             cargarTabla(result.data)
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }

// const removeAllItem = async (id) => {

//     try {
//         const response = await fetch(`/api/cart/item/${id}`, {
//             method: 'DELETE'
//         })
//         const result = await response.json()

//         if (result.ok) {
//             cargarTabla(result.data)
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

// const emptyCart = async () => {

//     try {
//         const response = await fetch(`/api/cart/empty`, {
//             method: 'DELETE'
//         })
//         const result = await response.json()

//         if (result.ok) {
//             cargarTabla(result.data)
//         }
//     } catch (error) {
//         console.error(error)
//     }
// }

const cargarTabla = (data) => {

    carrito.innerHTML = null;
    data.forEach(({idproducts,amount,image,nombre,price,total}) => {
        
        let item = `
        <tr>
        <th scope="row">
        <button class="btn btn-danger" onclick="removeItem('${idproducts}')" ><i class="fas fa-minus-square"></i></button>
        ${amount}
        <button class="btn btn-success" onclick="addItem('${idproducts}')" ><i class="fas fa-plus-square"></i></button>
        </th>
        <td><img src="../images/products/" class="w-25" /> </td>
        <td>${nombre}</td>
        <td>${price}</td>
        <td>${total}</td>
        <td><button class="btn btn-sm btn-danger" onclick="removeAllItem('${idproducts}')"><i class="fas fa-trash-alt"></i></button></td>
      </tr>
        `
        carrito.innerHTML += item
    });
console.log(carrito);
}

carrito && getCarrito();

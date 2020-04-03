import {REMOVE_FROM_CART, ADD_TO_CART, DELETE_FROM_CART} from "./actionTypes";


///ADD TO CART FUNCTIONS AND ACTIONS
const updateCartCount = (id, cart) => {
    const newcart = cart.map(item => {
        if(item.product.id === id){
            const new_quantity = item.quantity + 1;
            const total = item.product.price * new_quantity;
            item = {...item, quantity: new_quantity, total: total};
        }
        return item;
    })
    return newcart;
}

const updateCart = (id, cart, products) => {
    const product = products.filter(item => item.id === id);
        const cart_obj = {
            quantity: 1,
            product : product[0],
            total: product[0].price
        }
        return [...cart, cart_obj];
}

export const addToCart = (cart_quantity, id, cart, products) => {
    const newCart = updateCartCount(id, cart);
    let arr_cart = [];
    if(JSON.stringify(newCart) === JSON.stringify(cart)){
        arr_cart = updateCart(id, cart, products);
    }
    else{
        arr_cart = newCart;
    }
    cart_quantity += 1;
    return {
        type: ADD_TO_CART,
        payload: {
            cart_quantity: cart_quantity,
            cart : arr_cart
        }
    }
}


///REMOVE FROM CART FUNCTIONS AND ACTIONS

const dcrementCartCount = (id, cart) => {
    const newcart = cart.map(item => {
        if(item.product.id === id){
            const new_quantity = item.quantity - 1;
            const total = item.total - item.product.price;
            if(new_quantity === 0){
                // removeFromCart(item.product.id, cart)
                item = 1;
            }
            else{
                item = {...item, quantity: new_quantity, total: total};
            }
        }
        return item;
    })
    const arr = newcart.filter(item => item !== 1);
    return arr;
}

// const increment = (cart_quantity, id, cart) => {
//     const newCart = updateCartCount(id, cart);
//     cart_quantity += 1;
//     return {
//         type: "ADD_TO_CART",
//         payload: {
//             cart_quantity: cart_quantity,
//             cart : newCart
//         }
//     }
// }

export const decrement = (cart_quantity, id, cart) => {
    const newCart = dcrementCartCount(id, cart);
    cart_quantity -= 1;
    return {
        type: REMOVE_FROM_CART,
        payload: {
            cart_quantity: cart_quantity,
            cart : newCart
        }
    }
}

////DELETE FROM CART FUNCTIONS AND ACTIONS

const cartDelete = (id, cart) => {
    const newcart = cart.map(item => {
        if(item.product.id === id){
            item = 1;
        }
        return item;
    })
    const arr = newcart.filter(item => item !== 1);
    return arr;
}

const getQuantityOfDeleteItem = (id, cart) => {
    const array = cart.filter(item => item.product.id === id);
    return array[0].quantity;
}

export const deleteFromCart = (cart_quantity, id, cart) => {
    const old_quantity = getQuantityOfDeleteItem(id, cart);
    const newCart = cartDelete(id, cart)
    cart_quantity -= old_quantity;
    return {
        type: DELETE_FROM_CART,
        payload: {
            cart_quantity: cart_quantity,
            cart : newCart
        }
    }
}
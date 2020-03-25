import React, {Fragment} from "react"
import "./cartitem.css"
import {connect} from "react-redux";


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

const increment = (cart_quantity, id, cart) => {
    const newCart = updateCartCount(id, cart);
    cart_quantity += 1;
    return {
        type: "ADD_TO_CART",
        payload: {
            cart_quantity: cart_quantity,
            cart : newCart
        }
    }
}

const decrement = (cart_quantity, id, cart) => {
    const newCart = dcrementCartCount(id, cart);
    cart_quantity -= 1;
    return {
        type: "REMOVE_FROM_CART",
        payload: {
            cart_quantity: cart_quantity,
            cart : newCart
        }
    }
}

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

const deleteFromCart = (cart_quantity, id, cart) => {
    const newCart = cartDelete(id, cart)
    cart_quantity -= 1;
    return {
        type: "DELETE_FROM_CART",
        payload: {
            cart_quantity: cart_quantity,
            cart : newCart
        }
    }
}

const CartItems = (props) => {
    const {cart, cart_quantity} = props;
    return (
        <Fragment>
            <div className="cart-box">
                <button className="delete" onClick={() => props.dispatch(deleteFromCart(cart_quantity, props.productId, cart))}>X</button>
                <h4 className="text-cart">{props.name}</h4>
                <p className="text-cart">$ {props.price} x {props.quantity}</p>
                <p className="text-cart">Total: $ {props.total}</p>
                <button type="button" className="btn-cart" onClick={() => props.dispatch(increment(cart_quantity, props.productId, cart))}>+</button>
                <button className="btn-cart" onClick={() => props.dispatch(decrement(cart_quantity, props.productId, cart))}>-</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CartItems);
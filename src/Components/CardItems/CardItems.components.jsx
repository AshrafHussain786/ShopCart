import React, { Fragment } from 'react';
import "./carditems.css"
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

const updateCart = (id, cart, products) => {
    const product = products.filter(item => item.id === id);
        const cart_obj = {
            quantity: 1,
            product : product[0],
            total: product[0].price
        }
        return [...cart, cart_obj];
}

const addToCart = (cart_quantity, id, cart, products) => {
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
        type: "ADD_TO_CART",
        payload: {
            cart_quantity: cart_quantity,
            cart : arr_cart
        }
    }
}

const CardItems = (props) => {
    return(
    <Fragment>
        <div className="col-md-12 margin">
            <div className="card">
            <img className="card-img-top img" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="productImage"/>
                <div className="card-body">
                    <h3 className="card-title">{props.name}</h3>
                    <h4 className="card-subtitle">$ {props.price}</h4>
                    <button type="button" className="btn btn-dark" onClick={() => props.dispatch(addToCart(props.cart_quantity, props.id, props.cart, props.products))}>Add to Cart</button>
                </div>
            </div>
        </div>
    </Fragment>
    )

}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(CardItems);
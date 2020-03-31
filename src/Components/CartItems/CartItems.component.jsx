import React, {Fragment} from "react"
import "./cartitem.css"
import {connect} from "react-redux";
import {decrement} from "../../store/actions/cartActions";
import {deleteFromCart} from "../../store/actions/cartActions";
import {addToCart} from "../../store/actions/cartActions";

const CartItems = (props) => {
    const {cart, cart_quantity, products} = props;
    return (
        <Fragment>
            <div className="cart-box">
                <button className="delete" onClick={() => props.dispatch(deleteFromCart(cart_quantity, props.productId, cart))}>X</button>
                <h4 className="text-cart">{props.name}</h4>
                <p className="text-cart">$ {props.price} x {props.quantity}</p>
                <p className="text-cart">Total: $ {props.total}</p>
                <button type="button" className="btn-cart" onClick={() => props.dispatch(addToCart(cart_quantity, props.productId, cart, products))}>+</button>
                <button className="btn-cart" onClick={() => props.dispatch(decrement(cart_quantity, props.productId, cart))}>-</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cart_quantity: state.cart.cart_quantity,
        products: state.cart.products,
    }
}

export default connect(mapStateToProps)(CartItems);
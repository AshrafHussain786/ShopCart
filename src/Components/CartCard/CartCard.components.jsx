import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import "./cardCart.css"
import {decrement} from "../../store/actions/cartActions";
import {deleteFromCart} from "../../store/actions/cartActions";
import {addToCart} from "../../store/actions/cartActions";

const CartCard = (props) => {
    const {cart_quantity, cart, products} = props;
    return (
        <Fragment>
            <tr>
                <th>
                <img className="card-img-top cart_img" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" alt="productImage"/>
                </th>
                <td>{props.name}</td>
                <td>$ {props.price}</td>
                <td className="quantity">
                    {props.quantity} <br/>
                    <button type="button" className="btn-cart" onClick={() => props.dispatch(addToCart(cart_quantity, props.productId, cart, products))}>+</button>
                    <button className="btn-cart" onClick={() => props.dispatch(decrement(cart_quantity, props.productId, cart))}>-</button>
                </td>
                <td>$ {props.total}</td>
                <td><i className="fa fa-trash trash" onClick={() => props.dispatch(deleteFromCart(cart_quantity, props.productId, cart))}></i></td>
            </tr>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.cart.products,
        cart: state.cart.cart,
        cart_quantity: state.cart.cart_quantity,
    }
}

export default connect(mapStateToProps)(CartCard)

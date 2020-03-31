import React, { Fragment } from 'react';
import "./carditems.css"
import {connect} from "react-redux";
import {addToCart} from "../../store/actions/cartActions"


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
    return {
        cart: state.cart.cart,
        cart_quantity: state.cart.cart_quantity,
        products: state.cart.products,
    }
}

export default connect(mapStateToProps)(CardItems);
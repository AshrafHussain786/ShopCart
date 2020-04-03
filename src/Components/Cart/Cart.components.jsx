import React, { Fragment } from 'react';
import "./cart.css"
import {connect} from "react-redux";
import CartCardComponents from '../CartCard/CartCard.components';
import {Link} from "react-router-dom";

const Cart = ({cart}) => {
    return(
        <Fragment>
            <Link to="/">
                    <i className="fa fa-arrow-left back"></i>
                </Link>
            <div className="cartelement">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                            cart.length !== 0
                            ?
                            cart.map((item, index) => <CartCardComponents 
                                                                        key={index}
                                                                        name={item.product.title} 
                                                                        price={item.product.price} 
                                                                        quantity={item.quantity} 
                                                                        total={item.total}
                                                                        productId={item.product.id}/>)
                            :
                            <tr className="quantity">
                                <td>
                                <p>THE CART IS EMPTY!</p>
                                <Link to="/">
                                    <button type="button" className="view-cart">Go Back to Shop</button>
                                </Link>
                                </td>
                            </tr>
                            
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
    }
}

export default connect(mapStateToProps)(Cart);
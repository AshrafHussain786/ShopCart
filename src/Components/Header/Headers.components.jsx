import React, { Fragment, Component} from "react";
import "./header.css";
import {connect} from "react-redux"
import CartItems from "../CartItems/CartItems.component"
import {Link} from "react-router-dom";



class Header extends Component {

    state = {
        width : "0px"
    }

    openNav = () => {
        this.setState({width : "250px"});
    }

    closeNav = (e) => {
        e.preventDefault();
        this.setState({width : "0px"});
    }

    render(){
        const { cart } = this.props;
        return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <img src="" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            <button type="button" className="btn btn-default btn-sm" onClick={this.openNav}>
        <span className="count">{this.props.cart_quantity}</span>
            <span className="fa fa-shopping-cart"></span> Shopping Cart
            </button>
            </nav>
            <div id="mySidenav" className="sidenav" style={{width : this.state.width}}>
                <button className="closebtn" onClick={this.closeNav}>&times;</button>

                {
                    cart.map((item, index) => <CartItems 
                                                    key={index} 
                                                    name={item.product.title} 
                                                    price={item.product.price}
                                                    productId={item.product.id} 
                                                    quantity={item.quantity} 
                                                    total={item.total}/>
                                                )
                }

                <Link to="/cart">
                    <button type="button" className="view-cart" onClick={() => this.setState({width : "0px"})}>View Cart</button>
                </Link>
                
            </div>
        </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart,
        cart_quantity: state.cart.cart_quantity,
    }
}

export default connect(mapStateToProps)(Header);
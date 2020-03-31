import React, { Fragment } from 'react';
import "./cards.css"
import {connect} from "react-redux";


import CardItems from '../CardItems/CardItems.components';

const Cards = ({products}) => {
    return(
    <Fragment>
        <div className="container">
            <div className="row">
                <div className="card-columns">
                {
                    products.map((item, index) => <CardItems key={index} id={item.id} name={item.title} price={item.price}/>)
                }
                </div>
            </div>
        </div>
    </Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        products : state.cart.products,
    }
}

export default connect(mapStateToProps)(Cards);
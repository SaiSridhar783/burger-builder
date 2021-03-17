import React, { Component, Fragment } from 'react';

//import Aux from '../../../hoc/Auxi';
//import Button from '../../UI/Button/Button';
//import {NavLink} from 'react-router-dom';

class OrderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }

    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map( igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li> );
            } );

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed( 2 )}</strong></p>
                <p>Continue to Checkout?</p>
                <button className="btn btn-danger mr-3" onClick={this.props.purchaseCancelled}>CANCEL</button>
                <button className="btn btn-success" onClick={this.props.purchaseContinued}>CONTINUE</button>
                {/* <NavLink to="/checkout">
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </NavLink> */}
            </Fragment>
        );
    }
}

export default OrderSummary;
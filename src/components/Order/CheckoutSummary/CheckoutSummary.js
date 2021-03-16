import React from 'react';
import classes from './CheckoutSummary.module.css';
import Burger from '../../Burger/Burger';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> We hope it rastes well!!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <button className="btn btn-danger mr-3" onClick={props.checkoutCancelled}>CANCEL</button>
            <button className="btn btn-success" onClick={props.checkoutContinued}>CONTINUE</button>
        </div>
    );
}

export default checkoutSummary;
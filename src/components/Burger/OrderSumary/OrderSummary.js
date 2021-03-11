import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>);
        });


    return (
        <Fragment>
            <h3> Your Order</h3>
            <p> A delicious burger with the following ingredients: </p>
            <ul className="list-unstyled">
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p> Continue to Checkout ?</p>
            {/* <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button> */}
            <Button className="btn btn-danger" btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button className="btn btn-success" btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Fragment>
    );
};

export default orderSummary;
import React, { Fragment } from "react";

//import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey} className="alert alert-info pl-2">
        <span style={{ textTransform: "capitalize", fontWeight: "bold" }}>
          {igKey}
        </span>
        :{" "}
        <span
          className="bg-info py-1 px-2 text-white"
          style={{
            borderRadius: "20px",
            position: "absolute",
            left: "25%",
            top: "8.5px",
          }}
        >
          {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <div style={{ borderTop: "1px solid gray", paddingTop: "1rem" }}>
        <button
          className="btn btn-outline-danger"
          onClick={props.purchaseCancelled}
        >
          CANCEL
        </button>
        <button
          className="btn btn-outline-success ml-3"
          onClick={props.purchaseContinued}
        >
          CONTINUE
        </button>
      </div>
    </Fragment>
  );
};

export default orderSummary;

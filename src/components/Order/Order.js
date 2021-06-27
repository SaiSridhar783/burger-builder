import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingredientOutput = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
          backgroundColor: "rgba(0,0,0,0.2)",
          borderRadius: "8px"
        }}
        className="text-white px-1"
        key={ig.name}
      >
        {ig.name} - <span className="font-weight-bold">{ig.amount}</span>
      </span>
    );
  });

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p className="d-block w-100" style={{padding: "0 17%"}}>
        Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default order;

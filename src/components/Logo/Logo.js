import React from "react";

import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <Link to="/">
      {" "}
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/burger-logo.png`}
        alt="MyBurger"
      />{" "}
      <h3>Sai's Burger</h3>
    </Link>
  </div>
);

export default logo;

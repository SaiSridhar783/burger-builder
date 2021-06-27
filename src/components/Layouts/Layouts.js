import React, { Fragment, useState } from "react";
import classes from "./Layouts.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [showSideDrawer, setshowSideDrawer] = useState(true);

  const sideDrawerClosedHandler = () => {
    setshowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setshowSideDrawer(!showSideDrawer);
  };

  return (
    <Fragment>
      <Toolbar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer closed={sideDrawerClosedHandler} open={showSideDrawer} />
      <main className={classes.Content}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;

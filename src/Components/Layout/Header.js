import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "../UI/HeaderCartButton";
import meals from "../../images/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMealse</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} />
      </div>
    </Fragment>
  );
};

export default Header;

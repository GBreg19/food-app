import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Layout/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  return (
    <button className={classes.button} onClick={ctx.onActive}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCartButton;

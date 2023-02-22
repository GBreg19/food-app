import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartIcon from "../Layout/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const bumped = ctx.isTrue ? classes.bump : "";
  return (
    <button className={`${classes.button} ${bumped}`} onClick={ctx.onActive}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ctx.sumOfAmounts()}</span>
    </button>
  );
};

export default HeaderCartButton;

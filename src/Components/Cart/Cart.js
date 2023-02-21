import React, { useContext } from "react";
import classes from "./Cart.module.css";
import modalClasses from "../Modal/Modal.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";

const Cart = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={`${classes["cart-items"]} ${modalClasses.modal}`}>
      <ul>
        {ctx.cartMeals.map((item) => {
          return <CartItem key={item.id} data={item} />;
        })}
      </ul>
      <div className={classes.total}>
        <span>
          <h1>Total Amount</h1>
        </span>
        <span>$20</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onDisable}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;

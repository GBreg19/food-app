import React, { Fragment, useContext, useState } from "react";
import classes from "./Cart.module.css";
import modalClasses from "../Modal/Modal.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";
import axios from "axios";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const ctx = useContext(CartContext);
  const fixedPrice = ctx.sumOfPrices().toFixed(2);

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrder = async (userData) => {
    setIsSubmitting(true);
    try {
      axios.post(
        "https://react-http-8a24f-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
        {
          user: userData,
          items: ctx.cartMeals,
        }
      );
    } catch (err) {
    } finally {
      setIsSubmitting(false);
      setDidSubmit(true);
    }
  };

  console.log(isSubmitting)

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={ctx.onDisable}>
        Close
      </button>
      <button className={classes.button} onClick={orderHandler}>
        Order
      </button>
    </div>
  );

  const submittingLoader = <p>Your order is submitting...</p>;
  const orderSubmitted = (
    <Fragment>
      <p>
        Thank you for submitting your order! We are processing it and will get
        it to you soon.
      </p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={ctx.onDisable}>
          Close
        </button>
      </div>
    </Fragment>
  );

  return (
    <div className={`${classes["cart-items"]} ${modalClasses.modal}`}>
      {!isSubmitting && !didSubmit && (
        <Fragment>
          <ul>
            {ctx.cartMeals.map((item) => {
              return <CartItem key={item.id} data={item} />;
            })}
          </ul>
          <div className={classes.total}>
            <span>
              <h1>Total Amount</h1>
            </span>
            <span>${fixedPrice}</span>
          </div>
          {isCheckout && <Checkout onConfirm={submitOrder} />}
          {!isCheckout && modalActions}
        </Fragment>
      )}
      {isSubmitting && !didSubmit && submittingLoader}
      {!isSubmitting && didSubmit && orderSubmitted}
    </div>
  );
};

export default Cart;

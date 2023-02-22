import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Input.module.css";

const Input = (props) => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.input}>
      <label>Amount</label>
      <input
        type="number"
        name="amount"
        value={props.value}
        min={1}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;

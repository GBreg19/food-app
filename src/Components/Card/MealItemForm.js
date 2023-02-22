import React, { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  const [amountInput, setAmountInput] = useState({ amount: 1 });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (value) {
      setAmountInput({ ...amountInput, [name]: parseInt(value) });
    }
  };
  return (
    <form
      onSubmit={(e) => ctx.addToCart(e, props.data, amountInput.amount)}
      className={classes.form}
    >
      <Input
        name={amountInput.amount}
        value={amountInput.amount}
        onChange={onChangeHandler}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;

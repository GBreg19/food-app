import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  return (
    <form className={classes.form}>
      <Input />
      <button type="button" onClick={() => ctx.addToCart(props.data)}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;

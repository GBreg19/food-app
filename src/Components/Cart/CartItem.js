import { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.data.findMeal.price.toFixed(2)}`;
  console.log(props.data.findMeal);

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.data.findMeal.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{ctx.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

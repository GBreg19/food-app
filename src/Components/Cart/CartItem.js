import { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.data.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.data.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x{props.data.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => ctx.onRemove(props.data)}>−</button>
        <button onClick={() => ctx.onAdd(props.data)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;

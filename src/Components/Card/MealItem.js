import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <span>
        <h3>{props.data.name}</h3>
        <p className={classes.description}>{props.data.description}</p>
        <p className={classes.price}>{props.data.price}</p>
      </span>
      <MealItemForm data={props.data} />
    </li>
  );
};

export default MealItem;

import React, { useContext, useState } from "react";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "./Card";
import CartContext from "../../store/CartContext";

const AvailableMeals = () => {
  const ctx = useContext(CartContext);
  return (
    <div className={classes.meals}>
      <Card>
        <ul>
          {ctx.mealData.map((item) => {
            return <MealItem key={item.id} data={item} />;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default AvailableMeals;

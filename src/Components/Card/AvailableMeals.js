import React, { useContext, useState } from "react";
import MealItem from "./MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "./Card";
import CartContext from "../../store/CartContext";

const AvailableMeals = () => {
  const ctx = useContext(CartContext);

  if (ctx.isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (ctx.error) {
    return (
      <section className={classes.mealsError}>
        <p>{ctx.error}</p>
      </section>
    );
  }
  
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

import React, { useState } from "react";

const CartContext = React.createContext({
  isModalActive: false,
  onActive: () => {},
  onDisable: () => {},
  addToCart: () => {},
  amount: 0,
});

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export const CartContextProvider = (props) => {
  const [isModalActive, setIsModalActive] = useState(true);
  const [mealData, setMealData] = useState(DUMMY_MEALS);
  const [cartMeals, setCartMeals] = useState([]);

  const [amount, setAmount] = useState(0);

  const addToCart = (id) => {
    const findMealIndex = DUMMY_MEALS.findIndex((m) => m.id === id);
    const findMeal = DUMMY_MEALS.find((meal) => meal.id === id);
    // console.log(findMealIndex);

    // setCartMeals((prevState) => {
    //   return [...prevState, { findMeal }];
    // });

    if (cartMeals.map((item) => item === findMeal)) {
      setAmount((prevState) => {
        return (prevState += 1);
      });
      setCartMeals((prevState) => {
        return [...prevState, { findMeal, amount: amount }];
      });
    } else {
      setCartMeals((prevState) => {
        return [...prevState, { findMeal }];
      });
    }
    // console.log(findMeal);
    console.log(cartMeals);
  };

  const onActive = () => {
    setIsModalActive(true);
  };

  const onDisable = () => {
    setIsModalActive(false);
  };
  return (
    <CartContext.Provider
      value={{
        isModalActive,
        onActive,
        onDisable,
        mealData,
        addToCart,
        cartMeals,
        amount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

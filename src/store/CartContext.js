import React, { useState } from "react";

const CartContext = React.createContext({
  isModalActive: false,
  onActive: () => {},
  onDisable: () => {},
  addToCart: () => {},
  onAdd: () => {},
  onRemove: () => {},
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

  const addToCart = (item) => {
    const mealIndex = cartMeals.findIndex((meal) => meal.id === item.id);

    if (mealIndex === -1) {
      setCartMeals((prevState) => {
        return [...prevState, { ...item, amount: 1 }];
      });
    } else {
      const updatedCart = [...cartMeals];
      updatedCart[mealIndex].amount += 1;
      setCartMeals(updatedCart);
    }
  };

  const onAdd = (data) => {
    const mealIndex = cartMeals.findIndex((meal) => meal.id === data.id);
    const updatedCart = [...cartMeals];
    updatedCart[mealIndex].amount += 1;
    setCartMeals(updatedCart);
  };

  const onRemove = (data) => {
    const mealIndex = cartMeals.findIndex((meal) => meal.id === data.id);
    const updatedCart = [...cartMeals];
    if (updatedCart[mealIndex].amount > 1) {
      updatedCart[mealIndex].amount -= 1;
      setCartMeals(updatedCart);
    } else {
      const filteredCart = updatedCart.filter((x) => x.id !== data.id);
      setCartMeals(filteredCart);
    }
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
        onAdd,
        onRemove,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

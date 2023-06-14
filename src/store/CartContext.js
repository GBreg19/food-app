import React, { useEffect, useState } from "react";
import classes from "../Components/UI/HeaderCartButton.module.css";
import axios from "axios";

const CartContext = React.createContext({
  isModalActive: false,
  onActive: () => {},
  onDisable: () => {},
  addToCart: () => {},
  onAdd: () => {},
  onRemove: () => {},
  inputValue: 1,
  onChangeHandler: () => {},
  sumOfAmounts: () => {},
  sumOfPrices: () => {},
  isTrue: () => {},
  setIsModalActive: () => {},
  setCartMeals: () => {},
});

export const CartContextProvider = (props) => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [mealData, setMealData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [cartMeals, setCartMeals] = useState([]);
  const [inputValue, setInputValue] = useState({});
  const [isTrue, setIsTrue] = useState(true);

  const fetchMeals = async () => {
    try {
      const response = await axios(
        "https://react-http-8a24f-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      const data = response.data;
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMealData(loadedMeals);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError("An error occured: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const addToCart = (e, item, amount) => {
    e.preventDefault();
    const mealIndex = cartMeals.findIndex((meal) => meal.id === item.id);

    if (mealIndex === -1) {
      setCartMeals((prevState) => {
        return [...prevState, { ...item, amount: amount }];
      });
    } else {
      const updatedCart = [...cartMeals];
      updatedCart[mealIndex].amount += amount;
      setCartMeals(updatedCart);
    }

    // Header Button bump animation
    setIsTrue(false);
    setTimeout(() => {
      setIsTrue(true);
    }, 100);
  };

  const sumOfAmounts = () => {
    const cartAmounts = cartMeals.map((x) => x.amount);
    return cartAmounts.reduce((x, y) => x + y, 0);
  };

  const sumOfPrices = () => {
    let totalPrice = 0;
    cartMeals.map((x) => (totalPrice += x.price * x.amount));
    return totalPrice;
  };

  const onAdd = (data) => {
    const mealIndex = cartMeals.findIndex((meal) => meal.id === data.id);
    const updatedCart = [...cartMeals];
    updatedCart[mealIndex].amount += 1;
    setCartMeals(updatedCart);

    // Header Button bump animation
    setIsTrue(false);
    setTimeout(() => {
      setIsTrue(true);
    }, 100);
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

    // Header Button bump animation
    setIsTrue(false);
    setTimeout(() => {
      setIsTrue(true);
    }, 100);
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
        setIsModalActive,
        onActive,
        onDisable,
        mealData,
        addToCart,
        cartMeals,
        onAdd,
        onRemove,
        inputValue,
        sumOfAmounts,
        sumOfPrices,
        isTrue,
        isLoading,
        error,
        setCartMeals,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

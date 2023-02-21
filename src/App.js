import React, { useContext } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Layout/MealsSummary";
import AvailableMeals from "./Components/Card/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./store/CartContext";

function App() {
  const ctx = useContext(CartContext);
  return (
    <div>
      <Header />
      <MealsSummary />
      <AvailableMeals />
      {ctx.isModalActive && <Cart />}
    </div>
  );
}

export default App;

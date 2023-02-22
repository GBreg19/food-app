import React, { useContext } from "react";
import Header from "./Components/Layout/Header";
import MealsSummary from "./Components/Layout/MealsSummary";
import AvailableMeals from "./Components/Card/AvailableMeals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./store/CartContext";
import modalClasses from "./Components/Modal/Modal.module.css";

function App() {
  const ctx = useContext(CartContext);
  const backdrop = ctx.isModalActive ? modalClasses.backdrop : "";

  return (
    <div id="avoie" className={`${backdrop}`}>
      <Header />
      <MealsSummary />
      <AvailableMeals />
      {ctx.isModalActive && (
        <div
          className={modalClasses.backdrop}
          onClick={() => ctx.setIsModalActive(false)}
        ></div>
      )}
      {ctx.isModalActive && <Cart />}
    </div>
  );
}

export default App;

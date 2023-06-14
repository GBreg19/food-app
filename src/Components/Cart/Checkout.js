import { useContext, useRef, useState } from "react";
import CartContext from "../../store/CartContext";
import classes from "./Checkout.module.css";

const Checkout = ({ onConfirm }) => {
  const ctx = useContext(CartContext);

  const [inputsValidity, setInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInpRef = useRef();
  const streetInpRef = useRef();
  const postalInpRef = useRef();
  const cityInpRef = useRef();

  const isInputValid = (value) => value !== "";
  const isFiveDigits = (value) => value.length === 5;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInpRef.current.value;
    const enteredStreet = streetInpRef.current.value;
    const enteredPostal = postalInpRef.current.value;
    const enteredCity = cityInpRef.current.value;

    const validName = isInputValid(enteredName);
    const validStreet = isInputValid(enteredStreet);
    const validPostal = isFiveDigits(enteredPostal);
    const validCity = isInputValid(enteredCity);

    setInputsValidity({
      name: validName,
      street: validStreet,
      postal: validPostal,
      city: validCity,
    });

    const formValidity = validName && validStreet && validPostal && validCity;

    if (!formValidity) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });

    ctx.setCartMeals([])
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInpRef} />
        {!inputsValidity.name && (
          <p className={classes.invalid}>Please provide valid name</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInpRef} />
        {!inputsValidity.street && (
          <p className={classes.invalid}>Please provide valid street</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInpRef} />
        {!inputsValidity.postal && (
          <p className={classes.invalid}>Please provide valid postal code</p>
        )}
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInpRef} />
        {!inputsValidity.city && (
          <p className={classes.invalid}>Please provide valid city</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={ctx.onDisable}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;

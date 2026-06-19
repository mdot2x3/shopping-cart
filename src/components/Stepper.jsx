import styles from "./Stepper.module.css";

const Stepper = ({ quantity, setQuantity }) => {
  const handleStepperClick = (action) => {
    // use current in case user clears input and then presses a button
    // use built-in JS function Number to convert value into JS number
    const current = Number(quantity) || 1;
    if (action === "increment") {
      setQuantity(current + 1);
    } else if (action === "decrement") {
      setQuantity(Math.max(1, current - 1));
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setQuantity("");
      return;
    }

    const number = Number(value);
    if (!Number.isNaN(number) && number >= 1) {
      setQuantity(number);
    }
  };

  const handleInputBlur = () => {
    if (quantity === "" || Number(quantity) < 1) {
      setQuantity(1);
    }
  };

  return (
    <div className={styles.stepper}>
      <button onClick={() => handleStepperClick("decrement")}>-</button>
      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
      <button onClick={() => handleStepperClick("increment")}>+</button>
    </div>
  );
};

export default Stepper;

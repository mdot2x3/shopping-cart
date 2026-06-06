import styles from "./Stepper.module.css";

const Stepper = ({ quantity, setQuantity }) => {
  const handleStepperClick = (action) => {
    if (action == "increment") {
      setQuantity(quantity + 1);
    } else if (action == "decrement") {
      setQuantity(Math.max(0, quantity - 1));
    }
  };
  return (
    <div className={styles.stepper}>
      <button onClick={() => handleStepperClick("decrement")}>-</button>
      <input type="text" value={quantity} />
      <button onClick={() => handleStepperClick("increment")}>+</button>
    </div>
  );
};

export default Stepper;

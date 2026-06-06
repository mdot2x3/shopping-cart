import { useState } from "react";
import styles from "./Card.module.css";
import Stepper from "./Stepper";

const Card = ({ props }) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <Stepper quantity={quantity} setQuantity={setQuantity} />
      <a href="">{props.category}</a>
    </div>
  );
};

export default Card;

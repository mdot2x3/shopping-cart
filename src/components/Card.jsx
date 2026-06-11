import { useState } from "react";
import styles from "./Card.module.css";
import Stepper from "./Stepper";

const Card = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <Stepper quantity={quantity} setQuantity={setQuantity} />
      <button onClick={handleAddToCart}>Add to Cart</button>
      <a href="">{product.category}</a>
    </div>
  );
};

export default Card;

import { useEffect, useState } from "react";
import styles from "./Card.module.css";
import Stepper from "./Stepper";

const Card = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");

  useEffect(() => {
    if (!addedMessage) return;

    const timeoutId = setTimeout(() => {
      setAddedMessage("");
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [addedMessage]);

  const handleAddToCart = () => {
    const selectedAmount = Number(quantity) || 1;

    onAddToCart(product, selectedAmount);
    setAddedMessage(`${selectedAmount} added to cart!`);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      {addedMessage ? (
        <p className={styles.addedMessage}>{addedMessage}</p>
      ) : (
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      )}
      <Stepper quantity={quantity} setQuantity={setQuantity} />
      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        Add to Cart
      </button>
      <p className={styles.category}>{product.category}</p>
    </div>
  );
};

export default Card;

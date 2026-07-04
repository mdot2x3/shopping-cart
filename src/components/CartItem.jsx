import { useEffect, useState } from "react";
import Stepper from "./Stepper";
import styles from "./CartItem.module.css";

const CartItem = ({ product, onQuantityChange, onDelete }) => {
  const [localQty, setLocalQty] = useState(product.quantity);

  // keep local in sync if parent changes cart externally
  useEffect(() => {
    setLocalQty(product.quantity);
  }, [product.quantity]);

  // wrapper passed to Stepper. Stepper may pass "" while typing, so accept that.
  const handleLocalSet = (value) => {
    // keep local UI state
    setLocalQty(value);

    // only call parent when we have a valid number
    if (value === "") return;

    // only allow valid input entries
    const number = Number(value);
    if (Number.isNaN(number)) return;

    // if valid, push change back to App
    onQuantityChange(product.id, number);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      `Remove "${product.title}" from cart?`,
    );
    if (confirmDelete) onDelete(product.id);
  };

  // calc the subtotal for each item
  const subtotal = product.price * (Number(localQty) || 0);

  return (
    <div className={styles.cartItem}>
      <img src={product.image} alt={product.title} />
      <div className={styles.leftContainer}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
        <Stepper quantity={localQty} setQuantity={handleLocalSet} />
      </div>
      <div className={styles.rightContainer}>
        <p className={styles.subtotal}>${subtotal.toFixed(2)}</p>
        <button className={styles.removeBtn} onClick={handleDeleteClick}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

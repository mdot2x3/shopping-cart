import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
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

    if (number === 0) {
      const confirmRemove = window.confirm(
        `Set quantity to 0 will remove "${product.title}". Remove item?`,
      );
      if (confirmRemove) {
        onDelete(product.id);
        return;
      }
      // else, user cancelled so reset to 1
      setLocalQty(1);
      onQuantityChange(product.id, 1);
      return;
    }

    // if valid, push change back to App
    onQuantityChange(product.id, number);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      `Remove "${product.title}" from cart?`,
    );
    if (confirmDelete) onDelete(product.id);
  };

  return (
    <div className={styles.cartItem}>
      <img src={product.image} alt={product.title} />
      <div className={styles.detailsContainer}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
      <Stepper quantity={localQty} setQuantity={handleLocalSet} />
      <button className={styles.deleteBtn} onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;

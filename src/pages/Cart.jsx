import { useOutletContext } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, handleUpdateQuantity, handleDeleteItem } = useOutletContext();

  return (
    <div className={styles.cart}>
      <h1>Welcome to the Cart Page.</h1>
      <p>
        Total items: {cart.reduce((total, item) => total + item.quantity, 0)}
      </p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className={styles.items}>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              product={item}
              onQuantityChange={handleUpdateQuantity}
              onDelete={handleDeleteItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;

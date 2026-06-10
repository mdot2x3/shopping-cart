import { useOutletContext } from "react-router";
import { Link } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, handleUpdateQuantity, handleDeleteItem, handleClearCart } =
    useOutletContext();

  return (
    <div className={styles.cart}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      <div className={styles.itemsColumn}>
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

      <aside className={styles.summaryColumn}>
        <h2>Order Summary</h2>
        <p>
          Total items: {cart.reduce((total, item) => total + item.quantity, 0)}
        </p>
        <p>Total cost: ...</p>
        <div className={styles.cartActions}>
          <button className={styles.checkoutButton}>Checkout</button>
          <button className={styles.clearButton} onClick={handleClearCart}>
            Clear Cart
          </button>
          <Link to="/shop" className={styles.contButton}>
            Continue Shopping
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default Cart;

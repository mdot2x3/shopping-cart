import { useOutletContext } from "react-router";
import { Link } from "react-router";
import styles from "./Cart.module.css";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, handleUpdateQuantity, handleDeleteItem, handleClearCart } =
    useOutletContext();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalCost = cart.reduce(
    (total, item) => total + item.quantity * Number(item.price),
    0,
  );

  return (
    <div className={styles.cart}>
      {cart.length === 0 ? (
        <p className={styles.emptyState}>
          Your cart is empty — check out our <Link to="/shop">Shop</Link> page.
        </p>
      ) : (
        <>
          <h1 className={styles.cartTitle}>Your Cart</h1>
          <div className={styles.itemsColumn}>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                product={item}
                onQuantityChange={handleUpdateQuantity}
                onDelete={handleDeleteItem}
              />
            ))}
          </div>

          <aside className={styles.summaryColumn}>
            <h2>Order Summary</h2>
            <p>Total items: {totalItems}</p>
            <p>Total cost: ${totalCost.toFixed(2)}</p>
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
        </>
      )}
    </div>
  );
}

export default Cart;

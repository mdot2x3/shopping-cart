import { useState } from "react";
import { Outlet } from "react-router";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      // if item already in cart state, overwrite it with new updated value
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      // else add it to list
      return [...prevCart, { ...product, quantity }];
    });
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const handleDeleteItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    const confirmClear = window.confirm("Remove all items from cart?");
    if (confirmClear) setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className={styles.app}>
      <header>
        <nav>
          <Navbar cartCount={cartCount} />
        </nav>
      </header>
      <main>
        <Outlet
          context={{
            cart,
            setCart,
            handleAddToCart,
            handleUpdateQuantity,
            handleDeleteItem,
            handleClearCart,
          }}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

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
    // for testing
    console.log(cart);
  };

  return (
    <div className={styles.app}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <Outlet context={{ cart, setCart, handleAddToCart }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

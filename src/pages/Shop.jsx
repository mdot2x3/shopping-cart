import { useState, useEffect } from "react";
import styles from "./Shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Fetch from "../components/Fetch";

function Shop() {
  const [cardData, setCardData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // call Fetch like this (immediately-invoked async function expression) to avoid making the useEffect callback async (which is not allowed)
    (async () => {
      await Fetch(setCardData);
    })();
  }, []);

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

  return (
    <div className={styles.shop}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <div className={styles.mainTitle}>
          <h1>Welcome to the Shop Page.</h1>
        </div>
        <div className={styles.cardContainer}>
          {cardData.map((item) => (
            <Card key={item.id} product={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Shop;

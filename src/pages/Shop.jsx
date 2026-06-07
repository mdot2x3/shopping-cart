import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import Card from "../components/Card";
import Fetch from "../components/Fetch";

function Shop() {
  const [cardData, setCardData] = useState([]);
  const { handleAddToCart } = useOutletContext();

  useEffect(() => {
    // call Fetch like this (immediately-invoked async function expression) to avoid making the useEffect callback async (which is not allowed)
    (async () => {
      await Fetch(setCardData);
    })();
  }, []);

  return (
    <div className={styles.shop}>
      <div className={styles.mainTitle}>
        <h1>Welcome to the Shop Page.</h1>
      </div>
      <div className={styles.cardContainer}>
        {cardData.map((item) => (
          <Card key={item.id} product={item} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Shop;

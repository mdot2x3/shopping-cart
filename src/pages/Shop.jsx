import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import Card from "../components/Card";
import Fetch from "../components/Fetch";

function Shop() {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { handleAddToCart } = useOutletContext();

  useEffect(() => {
    // call Fetch like this (immediately-invoked async function expression) to avoid making the useEffect callback async (which is not allowed)
    (async () => {
      try {
        setIsLoading(true);
        await Fetch(setCardData);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={styles.shop}>
      <div className={styles.mainTitle}>
        <h1>Welcome to the Shop Page</h1>
      </div>
      {isLoading ? (
        <div className={styles.loadingState}>
          <div className={styles.spinner} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {cardData.map((item) => (
            <Card key={item.id} product={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;

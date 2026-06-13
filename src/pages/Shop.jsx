import { useState, useEffect } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";
import Card from "../components/Card";
import Fetch from "../components/Fetch";

function Shop() {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const categories = ["All", ...new Set(cardData.map((item) => item.category))];
  const displayedCards =
    selectedCategory === "All"
      ? cardData
      : cardData.filter((item) => item.category === selectedCategory);

  // helper to capitalize dropdown labels
  const formatCategoryLabel = (category) =>
    category
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className={styles.shop}>
      <div className={styles.mainTitle}>
        <h1>Welcome to the Shop Page</h1>
      </div>
      <div className={styles.filterBar}>
        <label htmlFor="categoryFilter">Category:</label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled={isLoading}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === "All" ? "All" : formatCategoryLabel(category)}
            </option>
          ))}
        </select>
      </div>
      {isLoading ? (
        <div className={styles.loadingState}>
          <div className={styles.spinner} />
          <p>Loading...</p>
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {displayedCards.map((item) => (
            <Card key={item.id} product={item} onAddToCart={handleAddToCart} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Shop;

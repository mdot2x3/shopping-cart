import { useState } from "react";
import styles from "./Shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Shop() {
  const [cardData, setCardData] = useState({});

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
          <Card
            props={{
              image: "https://i.imgur.com/eKN2xLe.jpeg",
              title: "Birthday",
              description:
                "Today is someones birthday. Buy this image to help them celebrate.",
              price: "$3.99",
              category: "fun",
            }}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Shop;

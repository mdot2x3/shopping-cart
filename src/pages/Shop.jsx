import styles from "./Shop.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Shop() {
  return (
    <div className={styles.shop}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <h1>Welcome to the Shop Page.</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Shop;

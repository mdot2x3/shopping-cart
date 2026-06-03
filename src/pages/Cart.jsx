import styles from "./Cart.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  return (
    <div className={styles.cart}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <h1>Welcome to the Cart Page.</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Cart;

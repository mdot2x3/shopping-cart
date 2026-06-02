import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main>
        <h1>Welcome to the Home Page.</h1>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

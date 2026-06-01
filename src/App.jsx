import styles from "./App.module.css";
import Navbar from "./components/Navbar";

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
      <footer>footer here</footer>
    </div>
  );
}

export default App;

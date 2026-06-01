import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <header>
        <nav className="nav">
          <Navbar />
        </nav>
      </header>
      <main className="main">
        <h1>Welcome to the Home Page.</h1>
      </main>
      <footer className="footer">footer here</footer>
    </div>
  );
}

export default App;

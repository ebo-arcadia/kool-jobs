import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./features/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Kool Jobs!</p>
        <a
          className="App-link"
          href="https://github.com/ebo-arcadia/kool-jobs/tree/development"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to source code
        </a>
      </header>
      <Counter />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <footer className="App-header">
        <Weather />
        <p>Let's do this</p>
        <a
          className="App-link"
          href="https://github.com/Chelysita/react-weather-app.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source code
        </a>
        <button type="button" class="btn">
          Button
        </button>
      </footer>
    </div>
  );
}

export default App;

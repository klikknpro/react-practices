import logo from "./logo.svg";
import "./App.css";
// import MainButton from "./components/MainButton";
import ButtonListMap from "./components/ButtonListMap";
// import MainText from "./components/MainText";

// const someText = "Sure it works.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonListMap />
      </header>
    </div>
  );
}

export default App;

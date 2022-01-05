import logo from "./logo.svg";
import "./App.css";
import MainButton from "./components/MainButton";

// const valami szoveg, atadom a componensnek, es ez irodjon ki

const someText = "Sure it works.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainButton textToShow={someText} />
        <div className="mainText"></div>
      </header>
    </div>
  );
}

export default App;

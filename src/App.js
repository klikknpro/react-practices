import logo from "./logo.svg";
import "./App.css";
import MainButton from "./components/MainButton";

const showText = () => {
  const mainText = document.querySelector(".mainText");
  mainText.textContent = "It works.";
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainButton onClick={showText} />
        <div className="mainText"></div>
      </header>
    </div>
  );
}

export default App;

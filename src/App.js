import logo from "./logo.svg";
import "./App.css";
// import MainButton from "./components/MainButton";
import ButtonListMap from "./components/ButtonListMap";
// import MainText from "./components/MainText";
// import Profile from "./components/Profile"
// import Profile2 from "./components/Profile2"
// import Profile3 from "./components/Profile3"
import Profile4 from "./components/Profile4"

// const someText = "Sure it works.";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonListMap />
        <Profile4 />
      </header>
    </div>
  );
}

export default App;

# react-practices

button component
kattintasra a gomb alatti div-be szoveg irodik

import logo from "./logo.svg";
import "./App.css";
import MainButton from "./components/MainButton";
// import MainText from "./components/MainText";

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

function mainButton(props) {
const showText = () => {
const mainText = document.querySelector(".mainText");
mainText.textContent = props.textToShow;
};

return <button onClick={showText}>Click Me</button>;
}

export default mainButton;

import React, { useState } from "react";

const [text, displayText] = useState("");

const MainText = () => {
return <div>{text}</div>;
};

export default MainText;

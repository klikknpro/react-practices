import MainText from "./MainText";
import ReactDOM from "react-dom";

function mainButton(props) {
  const showText = () => {
    // na itt kell valami state-et updatelni ...
  };

  return <button onClick={showText}>Click Me</button>;
}

export default mainButton;

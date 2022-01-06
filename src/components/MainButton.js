// import MainText from "./MainText";

function mainButton(props) {
  const showText = () => {
    const mainText = document.querySelector(".mainText");
    mainText.textContent = props.textToShow;
  };

  return <button onClick={showText}>{props.text}</button>;
}

export default mainButton;

function mainButton(props) {
  const showText = () => {
    const mainText = document.querySelector(".mainText");
    mainText.textContent = props.textToShow;
  };

  return <button onClick={showText}>Click Me</button>;
}

export default mainButton;

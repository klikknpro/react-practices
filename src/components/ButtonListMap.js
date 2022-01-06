import React from "react";
import MainButton from "./MainButton";

const ButtonListMap = () => {
  const buttonTexts = ["Save", "Click", "Send", "Submit", "Apply"];
  return (
    <div>
      {buttonTexts.map((text, i) => (
        <MainButton text={text} key={i} />
      ))}
    </div>
  );
};

export default ButtonListMap;

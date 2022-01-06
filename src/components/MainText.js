import React, { useState } from "react";

const [text, displayText] = useState("");

const MainText = () => {
  return <div>{text}</div>;
};

export default MainText;

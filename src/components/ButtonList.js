// ez a component meg krvara nincs beillesztve sehova sehonnan
import React from "react";
import MainButton from "./MainButton";

const ButtonList = (props) => {
  let rows = [];

  for (let i = 0; i < 10; i++) {
    rows.push(<MainButton text={props.text} key={i} />);
  }

  return <div>{rows}</div>;
};

export default ButtonList;

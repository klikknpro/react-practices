// import ButtonWithClass from "./components/ButtonWithClass"

import { useState } from "react";

let myName = {
  name: "Bela",
  age: 20
};

const [counter, setClick] = useState(1);


const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{myName.name}: {myName.age}</p>
      <p id="first">First paragpraph</p>
      <p className="myp">Second paragpraph</p>
      <input placeholder="akarmi es barmi is" type="password"/>
    </div>
  );
}

export default App;

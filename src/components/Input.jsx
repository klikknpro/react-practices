// standard react input cucc
import React, {useState} from 'react';

function Input(props) {
  const [inputValue, setInput] = useState("");

  // console.log("render comp");
  // console.log(inputValue);

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => {
        setInput(e.target.value);
        }
      }/>
    </div>
  )
}

export default Input

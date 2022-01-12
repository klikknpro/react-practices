import React, { useState } from 'react'
import Input from "./components/Input"

const App = () => {
  const [shouldShowLanding, setterFunc] = useState("Home");
  // standard react input cucc
  const [inputValue, setInput] = useState("");
  const isActive = inputValue.length < 3;

  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Honda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ];

  console.log("render");
  console.log(inputValue);

  return (
    <div>
      <div>Hello lof@sz</div>
      {/* {shouldShowLanding ? landing : home} */}
      <button onClick={() => setterFunc("Home")}>Go to Home</button>
      <button onClick={() => setterFunc("Landing")}>Go to Landing</button>
      <button onClick={() => setterFunc("About")}>Go to About</button>
      {/* <div>{shouldShowLanding}</div> */}
      <div>
        {shouldShowLanding === "Home" && <div>Home</div>}
        {shouldShowLanding === "Landing" && <div>Landing</div>}
        {shouldShowLanding === "About" && <div>About</div>}
        {/* hmmm conditional rendering wtf cucc ... */}
        {shouldShowLanding === "About" || <div>This is not the About</div>}
      </div>
      <hr/>
      {/* standard react input cucc */}
      <input type="text" value={inputValue} onChange={(e) => {
        setInput(e.target.value);
        }
      }/>
      <button disabled={isActive}>Submit</button>
      {isActive && <p>Min. 3 char.!</p>}
      <hr/>
      <ul>
        {cars.map((car) => {
          if (car.brand.startsWith(inputValue)) {
            return <li>{car.brand} - {car.model}</li>
          }
        })}
        {/* ugyanez filter-el */}
      </ul>
    </div>
  );
}

export default App;

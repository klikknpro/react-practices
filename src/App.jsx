import { useState } from "react";

const shouldShowLanding = true;
const home = <div>Home</div>
const landing = <div>Landing</div>

const toggleButton = () => {
  !shouldShowLanding;
}

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={toggleButton}>Switch pages</button>
    </div>
  );
}

export default App;

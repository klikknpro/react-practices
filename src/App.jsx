import { useState } from "react";

const Content = () => {
  // a h1 szoveg menne majd ide
}

const App = () => {
  let [shouldShowLanding, setterFunc] = useState("Home");

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
    </div>
  );
}

export default App;

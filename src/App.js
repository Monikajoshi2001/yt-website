import React from "react";
import Home from "./components/Home"
import About from "./components/About"
import Tutorials from "./components/Tutorials";
import Contact from "./components/Contact";
const App = () => {
  return(
    <div className="flex flex-col">
      <div id="home">
        <Home/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="tutorials">
        <Tutorials/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  );
}
export default App;
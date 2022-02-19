import React, { useState } from "react";
import { Home } from "./Components/Pages/Home";
import { SocialMedia } from "./Components/SocialMedia";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home/>
    </div>
  );
}

export default App;

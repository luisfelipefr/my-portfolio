import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Components/About";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Pages/Home";
import { SocialMedia } from "./Components/SocialMedia";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Home />, <About/>]} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

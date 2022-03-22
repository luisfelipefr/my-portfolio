import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./Components/Pages/About";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Pages/Home";
import { SocialMedia } from "./Components/SocialMedia";
import { GlobalStyle } from "./styles/global";
import { HomePage } from "./pages/HomePage";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

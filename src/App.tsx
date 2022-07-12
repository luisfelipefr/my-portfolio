import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { GlobalStyle } from "./styles/global";
import { HomePage } from "./pages/HomePage";
import { Successfully } from "./Components/Pages/Sucessfully";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/emailsent" element={<Successfully />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

import React from "react";
import { Navbar } from "../Components/Navbar";
import { About } from "../Components/Pages/About";
import { Contact } from "../Components/Pages/Contact";
import { Home } from "../Components/Pages/Home";
import { Works } from "../Components/Pages/Works";

export function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Works />
      <Contact />
    </>
  );
}

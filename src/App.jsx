import { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/pages/Home/Hero";
import Partners from "./components/pages/Home/Partners";
import Benefits from "./components/pages/Home/Benefits";
import Meter from "./components/pages/Home/Meter";
import Solutions from "./components/pages/Home/Solutions";
import Features from "./components/pages/Home/Features";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Partners/>
      <Meter/>
      <Benefits/>
      <Solutions/>
      <Features/>
    </BrowserRouter>
  );
}

export default App;

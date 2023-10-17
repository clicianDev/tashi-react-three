import { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider } from "@theatre/r3f";
import Navbar from "./components/navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import prodAni from "./CameraAnimation.json"
import Capabilities from "./components/pages/capabilities";

function App() {
  const sheet = getProject("Tashi Bear Animation", {state: prodAni}).sheet("TashiScene");

  return (
    <BrowserRouter>
      <Navbar />
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true, antialias: true }}
      >
        <color attach="background" args={["#0D0D26"]} />
        <ScrollControls pages={5}>
          <SheetProvider sheet={sheet}>
            <Experience />
          </SheetProvider>
          <Scroll html>
          
            <Hero />
            <About />
            <Capabilities/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </BrowserRouter>
  );
}

export default App;

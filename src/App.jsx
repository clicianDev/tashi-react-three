import { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Experience from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Html } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider } from "@theatre/r3f";
import Navbar from "./components/navbar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import VersionOne from "./components/pages/About/VersionOne";



import { Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';

function ParticleSystem() {
  const particleCount = 1000; // Adjust as needed
  const { positions, colors } = createParticles(particleCount);

  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(positions), 3));
  geometry.setAttribute('color', new BufferAttribute(new Float32Array(colors), 3));

  const material = new PointsMaterial({
    size: 0.1, // Adjust the size of the particles
    vertexColors: true,
  });

  const points = useRef();

  useFrame(() => {
    if (points.current) {
      points.current.rotation.x += 0.001;
      points.current.rotation.y += 0.001;
    }
  });

  return (
    <Points ref={points} geometry={geometry} material={material} />
  );
}

function createParticles(count) {
  const positions = [];
  const colors = [];

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    positions.push(x, y, z);

    const r = Math.random();
    const g = Math.random();
    const b = Math.random();
    colors.push(r, g, b);
  }

  return { positions, colors };
}



function App() {
  const sheet = getProject("Tashi Bear Animation").sheet("TashiScene");

  return (
    <BrowserRouter>
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
            <Navbar />
            <Hero occlude="blending" />
            <VersionOne/>
            <About />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </BrowserRouter>
  );
}

export default App;

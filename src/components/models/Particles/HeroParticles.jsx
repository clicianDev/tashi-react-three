import {React, useRef} from 'react';

import { Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';
import {  useFrame } from '@react-three/fiber';


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

 function HeroParticles() {
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
  

  export default HeroParticles;
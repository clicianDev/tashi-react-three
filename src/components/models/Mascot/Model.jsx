import { React, useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

let actionNames = `sleeping`;
function Model(props) {
  const groups = useRef();
  const mascot = useGLTF("./mascot/mascot.gltf");
  const { actions, names } = useAnimations(mascot.animations, groups);

  console.log(names);
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(2);

  useEffect(() => {
   // Reset and fade in animation after an index has been changed
    actions[names[index]].reset().fadeIn(0.5).play()
    // In the clean-up phase, fade it out
    return () => actions[names[index]].fadeOut(0.5)
  }, [index, actions, names])

  const handlePointerOver = (e) => {
   
    setIndex(1);
  };

  const handlePointerOut = (e) => {
    
   setIndex(2);
  };

  return (
    <>
      <mesh
        ref={groups}
        castShadow
        receiveShadow
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <primitive object={mascot.scene} position={[0, 0, 0]} />
      </mesh>
    </>
  );
}

export default Model;

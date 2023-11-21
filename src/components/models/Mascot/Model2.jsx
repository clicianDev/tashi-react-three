import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF,  } from "@react-three/drei";

function Model2(props) {
  const groups = useRef();
  const mascot = useGLTF("models/mascot-v2/mascot.gltf");
  const { actions, names } = useAnimations(mascot.animations, groups);
  const [animationName, setAnimationName] = useState("Meditate");
  const [shapekey, setShapekey] = useState("Meditate_key");

  useEffect(() => {

    actions[animationName].reset().fadeIn(0.5).play();
    actions[shapekey].reset().fadeIn(0.5).play();


  },);


  return (
    <>
      <mesh ref={groups} castShadow receiveShadow >
        <primitive object={mascot.scene} position={[0, -0.5, 0]} scale={[1.35,1.35,1.35]} />
      </mesh>
    </>
  );
}
useGLTF.preload("models/mascot-v2/mascot.gltf");
export default Model2;


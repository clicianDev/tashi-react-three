import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const groups = useRef();
  const mascot = useGLTF("./mascot-opt/mascot.gltf");
  const { actions, names } = useAnimations(mascot.animations, groups);

  const [animationIndex, setAnimationIndex] = useState(2);
  const [shouldPlayAnimation1, setShouldPlayAnimation1] = useState(false);

  useEffect(() => {
    // Play the animation based on animationIndex
    const animation = actions[names[animationIndex]];
    animation.reset().fadeIn(0.5).play();

    // If shouldPlayAnimation1 is true, play Index(1) and then switch back to Index(2)
    if (shouldPlayAnimation1) {
      setTimeout(() => {
        setShouldPlayAnimation1(false);
        setAnimationIndex(2);
      }, animation._clip.duration * 900); // Set the timeout to match the duration of Index(1) animation in milliseconds
    }

    // Clean up the animation when the component unmounts or when the prop changes
    return () => animation.fadeOut(0.5);
  }, [animationIndex, actions, names, shouldPlayAnimation1]);

  const handleClick = (e) => {
    setAnimationIndex(1);
    setShouldPlayAnimation1(true);
  };

  return (
<>
  <mesh ref={groups} castShadow receiveShadow onClick={handleClick}>
    <primitive
      object={mascot.scene}
      position={[0, 0, 0]}
     
    />
  </mesh>
</>
  );
}

export default Model;

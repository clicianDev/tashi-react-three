import React, { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

function Model(props) {
  const groups = useRef();
  const mascot = useGLTF("./mascot-v3/mascot.gltf");
  const { actions, names } = useAnimations(mascot.animations, groups);
  console.log(actions);
  const [clickCount, setClickCount] = useState(0);
  const [animationName, setAnimationName] = useState("Meditate");
  const [animationName2, setAnimationName2] = useState("Meditate_key");
  const [shouldPlayAnimation1, setShouldPlayAnimation1] = useState(false);


  useEffect(() => {
    const animation = actions[animationName];
    const animation2 = actions[animationName2];
    switch (props.currentPage) {

      case 1:
        if (animationName != "Idle" ) {
          setAnimationName("Idle");
          setAnimationName2("Idle_key");
        }
      case 2:
        if (animationName != "Discussing_anim" ) {
          setAnimationName("Discussing_anim");
          setAnimationName2("Discussing_key");
        }
      
        break;
      case 3:
        if (animationName != "Idle") {
          setAnimationName("Idle");
          setAnimationName2("Idle_key");
        }
        break;
    }
  
   
    console.log(animation2);
    animation2.reset().fadeIn(0.5).play();
    animation.reset().fadeIn(0.5).play();

    if (shouldPlayAnimation1) {
      setTimeout(() => {
        if (clickCount % 2 === 0) {
          setAnimationName("Meditate");
          setAnimationName2("Meditate_key");
          setShouldPlayAnimation1(false);
        } else {
          setAnimationName("Idle");
          setAnimationName2("Idle_key");
          setShouldPlayAnimation1(false);
        }
      }, animation._clip.duration * 800);
    }

    return () => {
      animation.fadeOut(0.5);
      animation2.fadeOut(0.5);
    };
  }, [animationName, animationName2, shouldPlayAnimation1, props.currentPage]);

  const handleClick = (e) => {
    setAnimationName("Falling");
    setAnimationName2("Falling_Key");
    setClickCount(clickCount + 1);
    setShouldPlayAnimation1(true);
  };

  return (
    <>
      <mesh ref={groups} castShadow receiveShadow onClick={handleClick}>
        <primitive object={mascot.scene} position={[0, 0, 0]} />
      </mesh>
    </>
  );
}
useGLTF.preload("./mascot-v3/mascot.gltf");
export default Model;

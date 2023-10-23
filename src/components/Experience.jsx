import React, { Suspense, useEffect, useState, useRef } from "react";
import CanvasLoader from "./Loader";
import { extend, useFrame } from "@react-three/fiber";
import CustomLights from "./models/CustomLights";
import {
  OrbitControls,
  Preload,
  Html,
  Effects,
  BakeShadows,
  Environment,
  useScroll,
} from "@react-three/drei";
import { val } from "@theatre/core";
import {
  editable as e,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";

import { UnrealBloomPass } from "three-stdlib";
import Model from "./models/Mascot/Model";
import Mascot from "./models/Mascot/Mascot";
import { easing } from "maath";
import StarParticles from "./models/Particles/StarParticles";
import { useAtom } from "jotai";
import { currentPageAtom } from "../GlobalState";
extend({ UnrealBloomPass });

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [0 + state.mouse.x / 4, 2.12 + state.mouse.y / 4, 1.85],
      0.2,
      delta
    );
  });
}

const Experience = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef();

  const scene = useRef();

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const sheet = useCurrentSheet();
  const scroll = useScroll();

  const [currentPage, setCurrentPage] = useAtom(currentPageAtom);

  const sequenceLength = val(sheet.sequence.pointer.length);

  function logCurrentPageCallback(scroll, callback) {
    const currentPage = Math.floor(scroll.offset * scroll.pages) + 1;
    callback(currentPage);
  }

  useFrame(() => {
    if (scroll) {
      logCurrentPageCallback(scroll, setCurrentPage);
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  return (
    <group ref={scene} className="z-30">
      <Environment preset="night" />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 3.5, 1.85]}
        fov={90}
        near={0.1}
        far={70}
      />
      <StarParticles />
      <CustomLights />

      <Model currentPage={currentPage} />
     <Effects disableGamma={true}>
          <UnrealBloomPass threshold={1} strength={0.9} radius={0.8} />
        </Effects>
        <BakeShadows /> 
      {/* <Rig/> */}
      <Preload all />
    </group>
  );
};

export default Experience;

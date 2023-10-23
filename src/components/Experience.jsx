import React, { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from 'three'
import { extend, useFrame } from "@react-three/fiber";
import CustomLights from "./models/CustomLights";
import {
  Preload,
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
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import { EffectComposer, Bloom, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import Model from "./models/Mascot/Model";
import Mascot from "./models/Mascot/Mascot";
import { easing } from "maath";
import StarParticles from "./models/Particles/StarParticles";
import { useAtom } from "jotai";
import { currentPageAtom } from "../GlobalState";
extend({ UnrealBloomPass, OutputPass });

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
  const bloomPass = new UnrealBloomPass()
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

      <Shape color="hotpink" position={[-2, 0, 0]}>
        <planeGeometry args={[1.5, 1.5]} />
      </Shape>
     <Effects disableNormalPass>
          <unrealBloomPass threshold={1} strength={0.9} radius={0.8} />
          <outputPass args={[THREE.ACESFilmicToneMapping]} />
        </Effects>
        <EffectComposer   >
          <Bloom mipmapBlur luminanceThreshold={1} levels={8} intensity={0.40 * 4} />
          <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        </EffectComposer>
      {/* <Rig/> */}
      <Preload all />
    </group>
  );
};

function Shape({ children, color, ...props }) {
  const [hovered, hover] = useState(true)
  return (
    <mesh {...props} onPointerOver={() => hover(false)} onPointerOut={() => hover(true)}>
      {children}
      {/* Now, in order to get selective bloom we simply crank colors out of
        their natural spectrum. Where colors are normally defined between 0 - 1 we push them
        way out of range, into a higher defintion (HDR). What previously was [1, 1, 1] now could
        for instance be [10, 10, 10]. This requires that toneMapping is off, or it clamps to 1 */}
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={!hovered ? 4 : 0} toneMapped={false} />
    </mesh>
  )
}

export default Experience;

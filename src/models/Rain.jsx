// @ts-nocheck
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import React from "react";

function Rain() {
  const rainRef = useRef();

  const raindropCount = 1000;
  const positions = new Float32Array(raindropCount * 3);

  for (let i = 0; i < raindropCount; i++) {
    positions[i * 3] = Math.random() * 100 - 50;
    positions[i * 3 + 1] = Math.random() * 50;
    positions[i * 3 + 2] = Math.random() * 100 - 50;
  }

  useFrame(() => {
    for (let i = 0; i < raindropCount; i++) {
      positions[i * 3 + 1] -= 0.5;

      if (positions[i * 3 + 1] < -10) {
        positions[i * 3 + 1] = 50;
      }
    }
    rainRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={rainRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          itemSize={3}
          count={raindropCount}
        />
      </bufferGeometry>
      <pointsMaterial color='#aaaaaa' size={0.1} />
    </points>
  );
}

function RainScene() {
  return (
    <>
      <Rain />
    </>
  );
}

export default RainScene;

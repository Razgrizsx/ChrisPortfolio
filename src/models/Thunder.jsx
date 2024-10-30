import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import React from "react";

function Thunder() {
  const [flash, setFlash] = useState(false);
  const minInterval = 1000;
  const maxInterval = 5000;

  const triggerThunder = () => {
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 100 + Math.random() * 200);
  };

  useEffect(() => {
    const flashThunder = () => {
      triggerThunder();
      const randomInterval =
        Math.random() * (maxInterval - minInterval) + minInterval;
      setTimeout(flashThunder, randomInterval);
    };
    flashThunder();
  }, []);

  return (
    <>
      {flash && (
        <mesh>
          <planeBufferGeometry attach='geometry' args={[100, 100]} />
          <meshBasicMaterial
            attach='material'
            color='red'
            opacity={0.8}
            transparent
          />
        </mesh>
      )}
    </>
  );
}

function ThunderScene() {
  return (
    <>
      <Thunder />
    </>
  );
}

export default ThunderScene;

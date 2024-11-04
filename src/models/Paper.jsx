import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import paperScene from "../assets/old_paper.glb";

const Paper = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF(paperScene);
  return (
    <group {...props}>
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Mat_Paper}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
});

export default Paper;

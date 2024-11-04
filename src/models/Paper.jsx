import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import paperScene from "../assets/old_paper.glb";

const Paper = (props) => {
  const { nodes, materials } = useGLTF(paperScene);
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.Mat_Paper}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default Paper;

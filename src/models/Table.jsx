import React from "react";
import { useGLTF } from "@react-three/drei";

import tableScene from "../assets/cabin.glb";

const Table = (props) => {
  const { nodes, materials } = useGLTF(tableScene);
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Loww_Poly_house2Mesh_initialShadingGroup_0.geometry}
        material={materials.initialShadingGroup}
        scale={0.01}
      />
    </group>
  );
};

export default Table;

"use client";

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import clickSound from "../assets/steps.wav";
import doorSound from "../assets/door.mp3";

import cabinScene from "../assets/cozy_cabin.glb";

const Cabin = (props) => {
  const { nodes, materials } = useGLTF(cabinScene);
  const navigate = useNavigate();
  const tl = useRef(null);
  const audioRef = useRef(null);
  const doorRef = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true, defaults: { duration: 1 } });
    tl.current.to("#home", { opacity: 0, duration: 1 });
    audioRef.current = new Audio(clickSound);
    doorRef.current = new Audio(doorSound);
  }, []);

  const triggerAnimation = () => {
    if (tl.current) {
      tl.current.play();
      setTimeout(() => {
        audioRef.current.play();
      }, 500);
      setTimeout(() => {
        doorRef.current.play();
      }, 2600);
    }
    setTimeout(() => {
      navigate("/about");
    }, 3100);
  };
  return (
    <group {...props}>
      <group
        position={[10.604, 70.579, -6.999]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Roof_Material_#163_0"].geometry}
          material={materials.Material_163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Roof_Material_#151_0"].geometry}
          material={materials.Material_151}
        />
      </group>
      <group
        position={[-63.254, -6.794, 9.599]}
        rotation={[-0.003, Math.PI / 2, 0]}
        scale={1.135}
        onClick={(e) => triggerAnimation()}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["PivotDoor001_Material_#163_0"].geometry}
          material={materials.Material_163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["PivotDoor001_Material_#164_0"].geometry}
          material={materials.Material_164}
        />
      </group>
      <group
        position={[96.028, 433.625, -78.615]}
        rotation={[-1.691, -0.421, 2.156]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf001_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[111.541, 380.788, -83.916]}
        rotation={[-1.14, -0.073, -2.427]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf002_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[92.703, 358.199, -99.82]}
        rotation={[-1.955, -0.213, 1.355]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf003_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[93.73, 380.788, -87.575]}
        rotation={[-1.413, -0.408, 2.825]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf004_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[105.225, 414.025, -97.365]}
        rotation={[-1.832, 0.354, -0.04]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf005_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[53.925, 363.11, 111.486]}
        rotation={[-1.28, 0.33, -1.445]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf006_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[53.055, 307.283, 98.755]}
        rotation={[-1.889, 0.303, 0.136]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf007_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[41.493, 329.872, 102.917]}
        rotation={[-1.936, -0.245, 1.438]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf008_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[33.433, 382.71, 107.456]}
        rotation={[-2.007, 0, 0.873]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf010_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[42.568, 329.872, 121.068]}
        rotation={[-1.53, -0.435, 2.54]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf011_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[-182.986, 358.199, -129.205]}
        rotation={[-1.955, -0.213, 1.355]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf012_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[-170.464, 414.025, -126.75]}
        rotation={[-1.832, 0.354, -0.04]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf013_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[-181.959, 380.788, -116.96]}
        rotation={[-1.413, -0.408, 2.825]}
        scale={0.468}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf014_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[-164.148, 380.788, -113.301]}
        rotation={[-1.14, -0.073, -2.427]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf015_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[-179.661, 433.625, -108]}
        rotation={[-1.691, -0.421, 2.156]}
        scale={0.731}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Leaf017_Material_#179_0"].geometry}
          material={materials.Material_179}
          position={[75.709, 46.575, 41.004]}
        />
      </group>
      <group
        position={[38.658, 51.533, 55.224]}
        rotation={[-3.126, 0.007, 1.573]}
        scale={[0.851, 1, 1]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ProjectedWindow001_Material_#163_0"].geometry}
          material={materials.Material_163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ProjectedWindow001_Material_#164_0"].geometry}
          material={materials.Material_164}
        />
      </group>
      <group
        position={[-70.776, 90.316, -7.324]}
        rotation={[Math.PI / 2, -1.521, 1.568]}
        scale={0.721}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["FixedWindow001_Material_#163_0"].geometry}
          material={materials.Material_163}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["FixedWindow001_Material_#164_0"].geometry}
          material={materials.Material_164}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder001_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-78.593, 11.689, 46.332]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 1, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder006_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-78.593, 56.576, -60.792]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 1, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder007_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-78.593, 34.28, -60.792]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 1, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder008_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-78.593, 11.689, -60.792]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={[1, 1, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder009_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-47.787, 71.043, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder010_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-47.787, 46.817, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder011_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-47.787, 24.521, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder012_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[-47.787, 1.93, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder013_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[66.598, 71.043, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder014_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[66.598, 46.817, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder015_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[66.598, 24.521, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder016_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[66.598, 1.93, 71.202]}
        rotation={[Math.PI, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder017_Material_#163_0"].geometry}
        material={materials.Material_163}
        position={[85.79, 79.485, -61.3]}
        rotation={[Math.PI / 2, -Math.PI / 2, 0]}
        scale={[1, 1, 1.082]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Snow_Material_#25_0"].geometry}
        material={materials.Material_25}
        position={[6.58, 1.224, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.453, 2.033, 1.571]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[99.106, -4.523, -92.371]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.622, 0.622, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Smoke_Stack_Material_#182_0"].geometry}
        material={materials.Material_182}
        position={[69.465, 117.466, 11.824]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Leaf_Material_#179_0"].geometry}
        material={materials.Material_179}
        position={[190.416, 463.189, -112.077]}
        rotation={[-Math.PI / 2, 0, -0.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree001_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[102.291, 153.362, -79.474]}
        rotation={[0.436, 0, 0]}
        scale={[0.12, 0.067, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree002_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[88.974, 244.161, -97.122]}
        rotation={[2.459, -0.837, 2.599]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree003_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[49.483, 241.282, 95.852]}
        rotation={[2.681, 0.315, -2.989]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Leaf009_Material_#179_0"].geometry}
        material={materials.Material_179}
        position={[90.184, 412.274, 189.967]}
        rotation={[-Math.PI / 2, 0, -1.745]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree004_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[35.884, 153.362, 113.282]}
        rotation={[1.064, -1.066, 1.006]}
        scale={[0.12, 0.067, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree005_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[47.517, -7.402, 106.869]}
        rotation={[-Math.PI / 2, 0, -1.309]}
        scale={[0.622, 0.622, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree006_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[-186.716, 244.161, -126.507]}
        rotation={[2.459, -0.837, 2.599]}
        scale={0.076}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Leaf016_Material_#179_0"].geometry}
        material={materials.Material_179}
        position={[-85.273, 463.189, -141.462]}
        rotation={[-Math.PI / 2, 0, -0.436]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree007_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[-173.399, 153.362, -108.859]}
        rotation={[0.436, 0, 0]}
        scale={[0.12, 0.067, 0.067]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Tree008_Material_#178_0"].geometry}
        material={materials.Material_178}
        position={[-176.583, -4.523, -121.756]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.622, 0.622, 1]}
      />
      {/*  <mesh
        castShadow
        receiveShadow
        geometry={nodes["Moon_Material_#180_0"].geometry}
        material={materials.Material_180}
        position={[305.436, 330.933, -89.29]}
        rotation={[0.339, -1.021, 1.863]}
        scale={0.57}
      /> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["smoke_Material_#181_0"].geometry}
        material={materials.Material_181}
        position={[69.048, 281.77, 24.57]}
        rotation={[-3.054, -1.484, 0]}
        scale={1.697}
      />
    </group>
  );
};

export default Cabin;

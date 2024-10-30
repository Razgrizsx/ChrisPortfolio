import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import React from "react";
import Cabin from "../models/Cabin";
import RainScene from "../models/Rain";
import ThunderScene from "../models/Thunder";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        Popup
      </div> */
}
const Home = () => {
  const adjustforScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [0.15, 0.15, 0.15];
      screenPosition = [1, -16.5, -43];
    }
    return [screenScale, screenPosition];
  };

  const [cabinScale, cabinPosition] = adjustforScreenSize();
  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className='w-full h-screen bg-[#04070e]'
        camera={{
          near: 0.1,
          far: 1000
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[50, 50, 3000]} intensity={1} />

          <Cabin
            position={cabinPosition}
            scale={cabinScale}
            rotation={[-0.02, 1.1, -0.02]}
          />
          <RainScene />
          <ThunderScene />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

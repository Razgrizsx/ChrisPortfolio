import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import React, { useState, useRef, useEffect, Suspense } from "react";
import Cabin from "../models/Cabin";
import RainScene from "../models/Rain";
import stormVideo from "../assets/stormVideo.mp4";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";

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
  const [soundOn, setSoundOn] = useState(true);

  const handleSound = () => {
    const audioElement = document.getElementById("stormAudio");
    audioElement.volume = audioElement.volume === 0 ? 0.4 : 0;
    setSoundOn(!soundOn);
  };

  useEffect(() => {
    const audioElement = document.getElementById("stormAudio");
    audioElement.volume = 0.4;
  }, []);

  const [cabinScale, cabinPosition] = adjustforScreenSize();
  return (
    <section className="w-full h-screen relative bg-black" id="home">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={stormVideo}
        autoPlay
        loop
        muted
        onLoadedMetadata={(e) => e.target.play()}
      />

      <audio id="stormAudio" src={stormVideo} autoPlay loop />
      <button
        className="bg-gray-600 hover:bg-gray-500 absolute right-4 top-6 rounded-full z-50 w-9 h-9 flex justify-center items-center opacity-50 text-white p-1"
        onClick={handleSound}
      >
        {soundOn ? (
          <CiVolumeHigh className="w-full h-full" />
        ) : (
          <CiVolumeMute className="w-full h-full" />
        )}
      </button>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[50, 50, 3000]} intensity={0.5} />
          <Cabin
            position={cabinPosition}
            scale={cabinScale}
            rotation={[-0.02, 1.1, -0.02]}
          />
          <RainScene />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;

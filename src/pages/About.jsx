import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Loader from "../components/Loader";
import React, { useState } from "react";
import stormVideo from "../assets/stormVideo.mp4";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { gsap } from "gsap";
import Table from "../models/Table";

const About = () => {
  const sectionRef = useRef(null); // Ref for the fade-in effect
  const [soundOn, setSoundOn] = useState(true);

  const adjustforScreenSize = () => {
    let screenScale, screenPosition;
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [200, 200, 200];
      screenPosition = [2, -5, 6.5];
    }
    return [screenScale, screenPosition];
  };

  const handleSound = () => {
    const audioElement = document.getElementById("stormAudio");
    audioElement.volume = audioElement.volume === 0 ? 0.4 : 0;
    setSoundOn(!soundOn);
  };

  useEffect(() => {
    const audioElement = document.getElementById("stormAudio");
    audioElement.volume = 0.4;

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.out" }
    );
  }, []);

  const [cabinScale, cabinPosition] = adjustforScreenSize();

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative opacity-0" // Start with opacity 0
    >
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
        className="bg-gray-600 absolute right-4 top-6 rounded-full z-50 w-9 h-9 flex justify-center items-center opacity-50 text-white p-1"
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
          far: 600,
        }}
      >
        <directionalLight position={[10, 10, 100]} intensity={1} />
        <Table
          position={cabinPosition}
          scale={cabinScale}
          rotation={[0.6, 0, 0]}
        />
      </Canvas>
    </section>
  );
};

export default About;

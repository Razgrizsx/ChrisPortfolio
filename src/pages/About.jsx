import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import stormVideo from "../assets/stormVideo.mp4";
import paperSound from "../assets/turning.wav";
import { CiVolumeHigh, CiVolumeMute } from "react-icons/ci";
import { gsap } from "gsap";
import Table from "../models/Table";
import Paper from "../models/Paper";
import { IoIosClose } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  const sectionRef = useRef(null);
  const paperRef = useRef(null);
  const textRef = useRef(null);
  const [soundOn, setSoundOn] = useState(true);
  const [currentPaper, setCurrentPaper] = useState(null);

  const tl = useRef(null);
  const audioRef = useRef(null);

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
    audioRef.current = new Audio(paperSound);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.out" }
    );
    if (paperRef.current) {
      paperRef.current.position.y = -5;
    }
  }, []);

  const [cabinScale, cabinPosition] = adjustforScreenSize();

  const animatePaper = () => {
    audioRef.current.play();
    if (paperRef.current) {
      gsap.fromTo(
        paperRef.current.position,
        { y: -2 },
        {
          y: 3,
          duration: 1.5,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        textRef.current,
        { top: "180%" },
        {
          top: "12%",
          duration: 1.5,
          ease: "power2.out",
        }
      );
    }
  };

  const hidePaper = () => {
    audioRef.current.play();
    if (paperRef.current) {
      gsap.fromTo(
        paperRef.current.position,
        { y: 3 },
        {
          y: -2,
          duration: 2,
          ease: "power2.out",
        }
      );
      gsap.fromTo(
        textRef.current,
        { top: "12%" },
        {
          top: "180%",
          duration: 2,
          ease: "power2.out",
        }
      );
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen relative opacity-0 overflow-hidden"
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
      <Link
        to={"/cabin"}
        className="bg-gray-600 hover:bg-gray-500 absolute left-4 top-6 rounded-full z-50 w-9 h-9 flex justify-center items-center opacity-50 text-white p-1"
      >
        <AiOutlineArrowLeft className="w-full h-full" />
      </Link>
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

        <Paper
          ref={paperRef}
          position={[0.1, -1.5, 4]}
          scale={[0.5, 0.5, 0.5]}
        />
      </Canvas>
      <button
        onClick={() => {
          setCurrentPaper("projects");
          animatePaper();
        }}
        className="w-[7%] h-[16%] left-[26%] top-[44%] rotate-[63deg] absolute z-50"
      ></button>
      <button
        onClick={() => {
          setCurrentPaper("skills");
          animatePaper();
        }}
        className="w-[9%] h-[18%] left-[34%] top-[54%] rotate-[10deg] absolute z-50"
      ></button>
      <button
        onClick={() => {
          setCurrentPaper("aboutMe");
          animatePaper();
        }}
        className="w-[10%] h-[18%] left-[52%] top-[53%] rotate-[10deg] absolute z-50"
      ></button>
      <div
        ref={textRef}
        className="w-[27%] h-[75%] left-[40%] top-[12%] absolute "
      >
        {currentPaper && (
          <button
            className="absolute top-2 right-1 w-8 h-8 border flex justify-center items-center border-gray-400 rounded-full"
            onClick={hidePaper}
          >
            <IoIosClose className="w-full h-full text-gray-400" />
          </button>
        )}
        {currentPaper === "projects" && <div>Projects</div>}
        {currentPaper === "skills" && <div>Skills</div>}
        {currentPaper === "aboutMe" && <div>AboutMe</div>}
      </div>
    </section>
  );
};

export default About;

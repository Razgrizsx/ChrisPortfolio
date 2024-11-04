import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white text-center">
      <Link
        to={"/cabin"}
        id="landing"
        className="w-[40%] h-[20%] bg-slate-800 flex flex-col gap-4 items-center justify-center rounded-lg p-10"
      >
        “The wind howls through twisted trees, and thunder rumbles in the
        distance. You find yourself before a cabin, hidden deep in the woods,
        where whispers of forgotten lore and eerie shadows linger. As lightning
        flashes, the door creaks open...”
        <div className="hover:underline">Click to continue...</div>
      </Link>
    </div>
  );
}

export default Landing;

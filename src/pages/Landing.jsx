import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white">
      <Link to={"/cabin"} id="landing">
        Continue
      </Link>
    </div>
  );
}

export default Landing;

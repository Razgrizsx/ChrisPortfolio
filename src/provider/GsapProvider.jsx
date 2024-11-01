"use client";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Observer } from "gsap/Observer";

export const GsapProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, Observer);
  }

  return <>{children}</>;
};

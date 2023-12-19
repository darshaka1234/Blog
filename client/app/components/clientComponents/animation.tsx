"use client";

import React from "react";
import Lottie from "lottie-react";
import lottie from "../../lottie/lottie1.json";

const Animation = () => {
  return <Lottie className="max-w-8xl" animationData={lottie} loop={true} />;
};

export default Animation;

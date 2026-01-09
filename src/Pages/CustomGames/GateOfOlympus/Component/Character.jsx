import React from 'react'
import image from "../../../../assets/GateOfOlympus/zeus.png";

export default function Character() {
  return (
    <div className="relative w-full flex justify-center items-center">
      <img src={image} alt="Zeus" className="h-[220px] zeus-glow" />
    </div>
  );
}

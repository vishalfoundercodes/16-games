import React, { useState, useEffect } from "react";
import BgImage from "../../../../assets/Pyramid_Slot/games-section.png";
import AImage from "../../../../assets/Pyramid_Slot/a.png";
import TwoImage from "../../../../assets/Pyramid_Slot/2x.png";
import JImage from "../../../../assets/Pyramid_Slot/j.png";
import QImage from "../../../../assets/Pyramid_Slot/q.png";
import WildImage from "../../../../assets/Pyramid_Slot/wild.png";
import MamyImage from "../../../../assets/Pyramid_Slot/pyramid-mamy.png";
import CatImage from "../../../../assets/Pyramid_Slot/cat.png";
import RollImage from "../../../../assets/Pyramid_Slot/roll.png";
import KImage from "../../../../assets/Pyramid_Slot/k.png";
// import { SYMBOLS } from "./data";
const SYMBOLS = [
  TwoImage, // pharaoh
  WildImage, // wild
  QImage, // q
  MamyImage, // k
  AImage, // a
  JImage, // j
  CatImage, // scroll
  KImage,
  RollImage,
];

const getRandom = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

// Reel Component with vertical animation
export default function Reel({ symbols, delay, spinning }) {
  const [animate, setAnimate] = useState(false);
  const [displaySymbols, setDisplaySymbols] = useState(symbols);

   useEffect(() => {
     if (spinning) {
       const startTimer = setTimeout(() => {
         setAnimate(true);
         // Generate random symbols for animation, then add final symbols
         const randomSymbols = Array.from({ length: 20 }, getRandom);
         setDisplaySymbols([...randomSymbols, ...symbols]);
       }, delay);

       const stopTimer = setTimeout(() => {
         setAnimate(false);
         setDisplaySymbols(symbols);
       }, delay + 3000);

       return () => {
         clearTimeout(startTimer);
         clearTimeout(stopTimer);
       };
     }
   }, [spinning, delay, symbols]);

  return (
    <div className="h-[320px] overflow-hidden bg-gradient-to-b from-purple-900 to-black  border-r-2 border-yellow-600 relative ">
      <div
        className={`transition-transform ${
          animate ? "animate-spin-reel" : "animate-stop-reel"
        }`}
        style={{
          transform: animate ? "translateY(-1600px)" : "translateY(0)",
          transition: animate
            ? "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
            : "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {displaySymbols.map((symbol, i) => (
          <div
            key={i}
            className="h-[80px] flex items-center justify-center text-5xl"
          >
            {/* {symbol} */}
            <img src={symbol} alt="" className="p-1 xsm3:p-4" />
          </div>
        ))}
      </div>

      {/* Highlight middle row */}
      <div className="absolute top-1/2 left-0 right-0 h-[80px] -translate-y-2/2 border-2 border-yellow-400 pointer-events-none"></div>
    </div>
  );
}

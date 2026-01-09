import React, { useState, useEffect } from "react";

// Assets
const SYMBOLS = [
  "🔱", // anubis
  "👑", // pharaoh
  "⭐", // wild
  "🔶", // q
  "💎", // k
  "🏺", // a
  "🎲", // j
  "✖️", // x2
  "📜", // scroll
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
         const randomSymbols = Array.from({ length:25 }, getRandom);
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
    <div className="h-[380px] overflow-hidden bg-purbleDark  border-r-2 border-yellow-600 relative">
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
            className="h-[73px] flex items-center justify-center text-5xl"
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Highlight middle row */}
      <div className="absolute top-1/2 left-0 right-0 h-[80px] -translate-y-1/2 border-2 border-yellow-400 pointer-events-none"></div>
    </div>
  );
}

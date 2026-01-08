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
      // Start animation after delay
      const startTimer = setTimeout(() => {
        setAnimate(true);
        // Generate new symbols during spin
        const newSymbols = Array.from({ length: 20 }, getRandom);
        setDisplaySymbols([...newSymbols, ...symbols]);
      }, delay);

      // Stop animation
      const stopTimer = setTimeout(() => {
        setAnimate(false);
      }, delay + 3000);

      return () => {
        clearTimeout(startTimer);
        clearTimeout(stopTimer);
      };
    }
  }, [spinning, delay]);

  return (
    <div className="h-[320px] overflow-hidden bg-gradient-to-b from-purple-900 to-black  border-2 border-yellow-600 relative">
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
            className="h-[80px] flex items-center justify-center text-5xl border-b border-purple-700"
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Highlight middle row */}
      <div className="absolute top-1/2 left-0 right-0 h-[80px] -translate-y-2/2 border-2 border-yellow-400 pointer-events-none"></div>
    </div>
  );
}

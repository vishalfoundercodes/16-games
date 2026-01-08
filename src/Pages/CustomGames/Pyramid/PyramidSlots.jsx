// import React from "react";
// import JackpotBar from "./Component/Jackpot";
// import SlotGrid from "./Component/SlotGrid";
// import ControlPanel from "./Component/ControlPanel";
// import useSlotMachine from "./Component/useMachine";

// export default function PyramidSlot() {
//      const { reels, spin } = useSlotMachine();
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-[#000] flex justify-center">
//       <div className="w-full max-w-[500px] text-white relative">
//         {/* Header */}
//         <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-900 to-indigo-900">
//           <button className="text-xl">⬅</button>
//           <h1 className="text-xl font-bold text-gold">PYRAMID SLOTS</h1>
//           <button className="text-xl">☰</button>
//         </div>

//         {/* Jackpot */}
//         <JackpotBar />

//         {/* Slot Grid */}
//         <SlotGrid reels={reels} />
       

//         {/* Controls */}
//         <ControlPanel spin={spin}/>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import useSlotMachine from "./Component/useMachine";
import JackpotBar from "./Component/Jackpot";
import ControlPanel from "./Component/ControlPanel";
import SlotGrid from "./Component/SlotGrid";

// // Assets
// const SYMBOLS = [
//   "🔱", // anubis
//   "👑", // pharaoh
//   "⭐", // wild
//   "🔶", // q
//   "💎", // k
//   "🏺", // a
//   "🎲", // j
//   "✖️", // x2
//   "📜", // scroll
// ];

// const getRandom = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

// // Reel Component with vertical animation
// function Reel({ symbols, delay, spinning }) {
//   const [animate, setAnimate] = useState(false);
//   const [displaySymbols, setDisplaySymbols] = useState(symbols);

//   useEffect(() => {
//     if (spinning) {
//       // Start animation after delay
//       const startTimer = setTimeout(() => {
//         setAnimate(true);
//         // Generate new symbols during spin
//         const newSymbols = Array.from({ length: 20 }, getRandom);
//         setDisplaySymbols([...newSymbols, ...symbols]);
//       }, delay);

//       // Stop animation
//       const stopTimer = setTimeout(() => {
//         setAnimate(false);
//       }, delay + 3000);

//       return () => {
//         clearTimeout(startTimer);
//         clearTimeout(stopTimer);
//       };
//     }
//   }, [spinning, delay]);

//   return (
//     <div className="h-[320px] overflow-hidden bg-gradient-to-b from-purple-900 to-black rounded-lg border-2 border-yellow-600 relative">
//       <div
//         className={`transition-transform ${
//           animate ? "animate-spin-reel" : "animate-stop-reel"
//         }`}
//         style={{
//           transform: animate ? "translateY(-1600px)" : "translateY(0)",
//           transition: animate
//             ? "transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
//             : "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
//         }}
//       >
//         {displaySymbols.map((symbol, i) => (
//           <div
//             key={i}
//             className="h-[80px] flex items-center justify-center text-5xl border-b border-purple-700"
//           >
//             {symbol}
//           </div>
//         ))}
//       </div>

//       {/* Highlight middle row */}
//       <div className="absolute top-1/2 left-0 right-0 h-[80px] -translate-y-1/2 border-2 border-yellow-400 pointer-events-none"></div>
//     </div>
//   );
// }

// // Slot Grid Component
// function SlotGrid({ reels, spinning }) {
//   return (
//     <div className="mx-3 mt-4 bg-gradient-to-b from-purple-950 to-black p-4 rounded-xl border-4 border-yellow-500 shadow-2xl">
//       <div className="grid grid-cols-5 gap-2">
//         {reels.map((reel, index) => (
//           <Reel
//             key={index}
//             symbols={reel}
//             delay={index * 200}
//             spinning={spinning}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Control Panel Component
// function ControlPanel({ spin, spinning, bet, setBet, winAmount }) {
//   const increaseBet = () => setBet((prev) => Math.min(prev + 50, 1000));
//   const decreaseBet = () => setBet((prev) => Math.max(prev - 50, 50));

//   return (
//     <div className="px-4 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-t-3xl mt-4 shadow-2xl">
//       <div className="flex items-center justify-between mb-2">
//         <div>
//           <p className="text-xs text-gray-300 mb-1">Bet Amount</p>
//           <div className="flex items-center gap-2">
//             <button
//               className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
//               onClick={decreaseBet}
//               disabled={spinning}
//             >
//               -
//             </button>
//             <span className="font-bold text-xl text-yellow-400 min-w-[60px] text-center">
//               {bet}
//             </span>
//             <button
//               className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
//               onClick={increaseBet}
//               disabled={spinning}
//             >
//               +
//             </button>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-xs text-gray-300 mb-1">Win Amount</p>
//           <p className="text-2xl font-bold text-green-400">{winAmount}</p>
//         </div>

//         <button
//           className={`px-8 py-4 rounded-full font-bold shadow-2xl text-lg transition-all ${
//             spinning
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-gradient-to-r from-green-400 to-green-600 text-black hover:scale-105 active:scale-95"
//           }`}
//           onClick={spin}
//           disabled={spinning}
//         >
//           {spinning ? "..." : "SPIN"}
//         </button>
//       </div>
//     </div>
//   );
// }

// // Jackpot Bar Component
// function JackpotBar() {
//   const [jackpot, setJackpot] = useState(125000);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setJackpot((prev) => prev + Math.floor(Math.random() * 10));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="mx-3 mt-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 p-3 rounded-lg shadow-xl">
//       <div className="text-center">
//         <p className="text-xs text-black font-semibold">JACKPOT</p>
//         <p className="text-2xl font-bold text-black tracking-wider">
//           ${jackpot.toLocaleString()}
//         </p>
//       </div>
//     </div>
//   );
// }

// // Custom Hook for Slot Machine
// function useSlotMachine() {
//   const [reels, setReels] = useState(
//     Array.from({ length: 5 }, () => Array.from({ length: 4 }, getRandom))
//   );
//   const [spinning, setSpinning] = useState(false);
//   const [bet, setBet] = useState(100);
//   const [winAmount, setWinAmount] = useState(0);

//   const spin = () => {
//     if (spinning) return;

//     setSpinning(true);
//     setWinAmount(0);

//     // Generate new results
//     const newReels = Array.from({ length: 5 }, () =>
//       Array.from({ length: 4 }, getRandom)
//     );

//     setReels(newReels);

//     // Stop spinning after animation
//     setTimeout(() => {
//       setSpinning(false);
//       // Calculate win (simple logic)
//       const middleRow = newReels.map((reel) => reel[1]);
//       const uniqueSymbols = new Set(middleRow);
//       if (uniqueSymbols.size === 1) {
//         setWinAmount(bet * 10);
//       } else if (uniqueSymbols.size === 2) {
//         setWinAmount(bet * 2);
//       }
//     }, 4000);
//   };

//   return { reels, spinning, spin, bet, setBet, winAmount };
// }

// Main Component
export default function PyramidSlot() {
  const { reels, spinning, spin, bet, setBet, winAmount } = useSlotMachine();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] via-[#2d0052] to-[#000] flex justify-center items-center p-4">
      <div className="w-full max-w-[500px] text-white relative">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-t-2xl shadow-xl">
          <button className="text-2xl hover:scale-110 transition-transform">
            ⬅
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            PYRAMID SLOTS
          </h1>
          <button className="text-2xl hover:scale-110 transition-transform">
            ☰
          </button>
        </div>

        {/* Jackpot */}
        <JackpotBar />

        {/* Slot Grid */}
        <SlotGrid reels={reels} spinning={spinning} />

        {/* Controls */}
        <ControlPanel
          spin={spin}
          spinning={spinning}
          bet={bet}
          setBet={setBet}
          winAmount={winAmount}
        />
      </div>
    </div>
  );
}
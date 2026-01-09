import { useState } from "react";
// import { SYMBOLS } from "./data";
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


export default function useSlotMachine() {


const getRandom = () => SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  const [reels, setReels] = useState(
    Array.from({ length: 5 }, () => Array.from({ length: 4 }, getRandom))
  );
  const [spinning, setSpinning] = useState(false);
  const [bet, setBet] = useState(100);
  const [winAmount, setWinAmount] = useState(0);
  const [desiredResult, setDesiredResult] = useState("23440"); // Default: ⭐🔶💎🏺🔱

  // Generate reels with controlled second row
  const generateControlledReels = (resultString) => {
    const resultIndices = resultString.split("").map(Number);
    
    return resultIndices.map((targetIndex) => {
      // Create a reel with the target symbol in position 1 (second row)
      const reel = Array.from({ length: 4 }, getRandom);
      reel[1] = SYMBOLS[targetIndex]; // Place desired symbol in second row
      return reel;
    });
  };

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setWinAmount(0);

    // Generate new reels with controlled result
    const newReels = generateControlledReels(desiredResult);
    setReels(newReels);

    // Log the result
    const middleRow = newReels.map((reel) => reel[1]);
    console.log("Final Result (indices):", desiredResult);
    console.log("Final Result (symbols):", middleRow.join(""));

    setTimeout(() => {
      setSpinning(false);
      
      // Calculate win
      const uniqueSymbols = new Set(middleRow);
      if (uniqueSymbols.size === 1) {
        setWinAmount(bet * 10);
      } else if (uniqueSymbols.size === 2) {
        setWinAmount(bet * 2);
      }
    }, 4000);
  };

  return { reels, spinning, spin, bet, setBet, winAmount };
}


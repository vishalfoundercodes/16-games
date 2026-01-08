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

const getRandom = () =>
  SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];

export default function useSlotMachine() {
  const [reels, setReels] = useState(
    Array.from({ length: 5 }, () => Array.from({ length: 4 }, getRandom))
  );
  const [spinning, setSpinning] = useState(false);
  const [bet, setBet] = useState(100);
  const [winAmount, setWinAmount] = useState(0);

  const spin = () => {
    if (spinning) return;

    setSpinning(true);
    setWinAmount(0);

    // Generate new results
    const newReels = Array.from({ length: 5 }, () =>
      Array.from({ length: 4 }, getRandom)
    );

    setReels(newReels);

    // Stop spinning after animation
    setTimeout(() => {
      setSpinning(false);
      // Calculate win (simple logic)
      const middleRow = newReels.map((reel) => reel[1]);
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


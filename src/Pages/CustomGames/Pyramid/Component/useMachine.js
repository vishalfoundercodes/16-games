import { useState } from "react";
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


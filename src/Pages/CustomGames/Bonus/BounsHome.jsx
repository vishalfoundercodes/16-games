
import React, { useState, useEffect } from "react";
import useSlotMachine from "./Component/useMachine";
import JackpotBar from "./Component/Jackpot";
import ControlPanel from "./Component/ControlPanel";
import SlotGrid from "./Component/SlotGrid";
import MenuModal from "./Component/MenuModal";
import GameHeader from "./Component/GameHeader";
// Main Component
export default function Bouns() {
  const { reels, spinning, spin, bet, setBet, winAmount } = useSlotMachine();
    const [menuOpen, setMenuOpen] = useState(false);
    const [sound, setSound] = useState(true);
    const [music, setMusic] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-start via-purple-start to-[#000] flex justify-center items-center p-1">
      <div className="w-full max-w-[500px] text-white relative">
        {/* Header */}

        <GameHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

        {/* Slot Grid */}
        <SlotGrid reels={reels} spinning={spinning} />

        {/* Controls */}
        <ControlPanel
          bet={100}
          balance={0}
          onSpin={spin}
          onInc={() => setBet((b) => b + 10)}
          onDec={() => setBet((b) => Math.max(10, b - 10))}
        />

        {/* MENU MODAL */}
        <MenuModal
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          sound={sound}
          setSound={setSound}
          music={music}
          setMusic={setMusic}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </div>
  );
}
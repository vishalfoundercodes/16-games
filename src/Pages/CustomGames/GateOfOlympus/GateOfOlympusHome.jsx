
import React, { useState, useEffect } from "react";
import useSlotMachine from "./Component/useMachine";
import JackpotBar from "./Component/Jackpot";
import ControlPanel from "./Component/ControlPanel";
import SlotGrid from "./Component/SlotGrid";
import MenuModal from "./Component/MenuModal";
import GameHeader from "./Component/GameHeader";
import "./Component/goo.css"
import StatusText from "./Component/StatusText";
import Character from "./Component/Character";

// Main Component
export default function GateOfOlympusHome() {
  const { reels, spinning, spin, bet, setBet, winAmount } = useSlotMachine();
  const [menuOpen, setMenuOpen] = useState(false);
  const [sound, setSound] = useState(true);
  const [music, setMusic] = useState(true);

  return (
    <div className="zeus-bg  w-full bg-[radial-gradient(circle_at_top,#8f7ad8,#5a3d99,#2b174f)] flex flex-col items-center">
      <div className="w-full max-w-[500px] text-white relative">
        {/* Header */}

        <GameHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

        <Character />

        {/* Slot Grid */}
        {/* <div className="slot-frame"> */}
        <SlotGrid reels={reels} spinning={spinning} />
        {/* </div> */}

        <StatusText />

        {/* Controls */}
        <ControlPanel
          bet={100}
          balance={0}
          onSpin={spin}
          onInc={() => setBet((b) => b + 10)}
          onDec={() => setBet((b) => Math.max(10, b - 10))}
          spin={spin}
          spinning={spinning}
         
          setBet={setBet}
          winAmount={winAmount}
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
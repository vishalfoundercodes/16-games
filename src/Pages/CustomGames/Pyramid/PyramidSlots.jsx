
import React, { useState, useEffect } from "react";
import useSlotMachine from "./Component/useMachine";
import JackpotBar from "./Component/Jackpot";
import ControlPanel from "./Component/ControlPanel";
import SlotGrid from "./Component/SlotGrid";
import MenuModal from "./Component/MenuModal";
import menubutton from "../../../assets/Pyramid_Slot/menu-button.png";
import returnbutton from "../../../assets/Pyramid_Slot/return-button.png";
import BgImage from "../../../assets/Pyramid_Slot/games-section.png";
import GameNameImage from "../../../assets/Pyramid_Slot/game-name.png";
import ControlImage from "../../../assets/Pyramid_Slot/game-control.png";
import { useNavigate } from "react-router-dom";

// Main Component
export default function PyramidSlot() {
  const navigate = useNavigate();
  const { reels, spinning, spin, bet, setBet, winAmount } = useSlotMachine();
    const [menuOpen, setMenuOpen] = useState(false);
    const [sound, setSound] = useState(true);
    const [music, setMusic] = useState(true);

    const grandValue = 1000;
    const majorValue = 500;
    const minorValue = 200;
    const miniValue = 100;


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-start via-purple-end to-[#000] flex justify-center items-center p-0">
      <div className="w-full max-w-[500px] text-white relative">
        <div
          className="relative mx-auto"
          style={{
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            width: "90%",
            maxWidth: "900px",
            height: "486px",
          }}
        >
          {/* 🔥 HEADER OVER BG IMAGE */}
          <div className="absolute top-20 left-0 w-full px-0 flex items-center justify-between z-10">
            {/* LEFT BUTTON */}
            <button
              className="hover:scale-110 transition-transform cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <img src={returnbutton} alt="Return" className="w-8 h-8" />
            </button>

            {/* CENTER TITLE */}

            {/* RIGHT BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="hover:scale-110 transition-transform cursor-pointer"
            >
              <img src={menubutton} alt="Menu" className="w-8 h-8" />
            </button>
          </div>

          {/* 🎯 JACKPOT VALUES OVER BG IMAGE */}
          <div className="absolute top-[96px] left-0 w-full h-[40px] z-20 pointer-events-none">
            {/* GRAND */}
            <span
              className="absolute text-sm sm:text-lg font-extrabold text-yellow-400"
              style={{ left: "20%", transform: "translateX(-50%)" }}
            >
              {grandValue}
            </span>

            {/* MAJOR */}
            <span
              className="absolute text-sm sm:text-lg font-extrabold text-pink-400"
              style={{ left: "39%", transform: "translateX(-50%)" }}
            >
              {majorValue}
            </span>

            {/* MINOR */}
            <span
              className="absolute text-sm sm:text-lg font-extrabold text-blue-400"
              style={{ left: "58%", transform: "translateX(-50%)" }}
            >
              {minorValue}
            </span>

            {/* MINI */}
            <span
              className="absolute text-sm sm:text-lg font-extrabold text-green-400"
              style={{ left: "76%", transform: "translateX(-50%)" }}
            >
              {miniValue}
            </span>
          </div>

          {/* 🎰 SLOT GRID */}
          <div
            className="absolute left-1/2"
            style={{
              bottom: "28px",
              transform: "translateX(-50%)",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <SlotGrid reels={reels} spinning={spinning} />
          </div>
        </div>

        {/* Controls */}
        <div
          className="mt-4 h-[80px] xsm4:h-[100px] "
          style={{
            backgroundImage: `url(${ControlImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100% 100%", // 🔥 FULL CONTROL
            width: "90%",
            maxWidth: "900px", // 👈 image ki max width
            // height: "100px", // 👈 image ki fixed height
            margin: "-68px auto",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <ControlPanel
            spin={spin}
            spinning={spinning}
            bet={bet}
            setBet={setBet}
            winAmount={winAmount}
          />
        </div>

        {/* MENU MODAL */}
        <MenuModal
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          sound={sound}
          setSound={setSound}
          music={music}
          setMusic={setMusic}
        />
      </div>
    </div>
  );
}
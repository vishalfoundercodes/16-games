import React from "react";

export default function GameHeader({ setMenuOpen,menuOpen }) {
  return (
    <div className="w-full px-1 pt-3">
      <div className="h-[90px] rounded-[22px] bg-gradient-to-b from-blue1 to-blue2 shadow-inner px-4">
        {/* SINGLE ROW */}
        <div className="flex items-center justify-between h-full gap-2">
          {/* LEFT MENU */}
          <button
            className="w-7 h-7 xsm:w-10 xsm:h-10 rounded-full bg-blue3 flex items-center justify-center shadow-md p-1 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <span className="text-gold text-sm xsm:text-2xl xsm:p-2">☰</span>
          </button>

          {/* CENTER JACKPOT */}
          <div className="flex-1 flex justify-center">
            <div
              className="rounded-[18px] px-4 py-2
              bg-gradient-to-b from-blue3 to-blue2
              border-2 border-cyan-300
              shadow-[0_0_25px_rgba(0,255,255,0.9),inset_0_0_12px_rgba(0,255,255,0.6)]"
            >
              <p className="text-center text-xs tracking-widest text-purple-200 font-semibold">
                JACKPOT
              </p>
              <p className="text-center text-3xl font-extrabold text-yellowColor">
                3,254,696
              </p>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex gap-2">
            <button className="w-7 h-7 xsm:w-10 xsm:h-10 rounded-full bg-blue3 text-gold flex items-center justify-center shadow-md cursor-pointer">
              ?
            </button>
            <button className="w-7 h-7 xsm:w-10 xsm:h-10 rounded-full bg-blue3 text-gold flex items-center justify-center shadow-md cursor-pointer">
              ✕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

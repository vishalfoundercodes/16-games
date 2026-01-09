import React from "react";

export default function ControlPanel({
  bet = 100,
  balance = 0,
  onSpin,
  onInc,
  onDec,
}) {
  return (
    <div className="mt-4 px-3 pb-4">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-2xl p-3 shadow-xl text-white">
        <div className="flex items-center justify-between">
          {/* Balance */}
          <div
            className="flex items-center gap-5 
  px-0 py-0 xsm:px-0 xsm:py-0 
  rounded-full
  bg-gradient-to-b from-[#3b0f6f] to-[#1a0033]
  shadow-[0_6px_14px_rgba(0,0,0,0.6)]
  border border-[#4b1a86]"
          >
            {/* COIN */}
            <div
              className="w-6 h-6 xsm:w-10 xsm:h-10 
    rounded-full 
    bg-gradient-to-b from-[#FFD84D] to-[#E0A800]
    flex items-center justify-center 
    font-extrabold text-black
    shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),0_3px_6px_rgba(0,0,0,0.6)]"
            >
              G
            </div>

            {/* BALANCE */}
            <span
              className="text-lg xsm:text-xl font-extrabold text-white pr-2
    drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
            >
              {balance}
            </span>
          </div>

          {/* Bet Controls */}
          <div
            className="flex items-center bg-gradient-to-b from-[#3a0a6a] to-[#1a0033] 
rounded-xl px-0 py-0 shadow-[inset_0_0_6px_rgba(0,0,0,0.6)]"
          >
            {/* MINUS */}
            <button
              onClick={onDec}
              className="w-8 h-8 xsm:w-11 xsm:h-11 
    bg-gradient-to-b from-[#6aff6a] to-[#1f9f1f]
    rounded-lg text-black text-xl font-extrabold
    shadow-[0_3px_0_#0c6b0c]
    active:translate-y-[2px] active:shadow-none"
            >
              −
            </button>

            {/* AMOUNT */}
            <div
              className="min-w-[50px] xsm:min-w-[90px] text-center 
    text-xl xsm:text-2xl font-extrabold text-[#6aff6a]
    drop-shadow-[0_0_6px_rgba(106,255,106,0.9)]"
            >
              {bet}
            </div>

            {/* PLUS */}
            <button
              onClick={onInc}
              className="w-8 h-8 xsm:w-11 xsm:h-11 
    bg-gradient-to-b from-[#6aff6a] to-[#1f9f1f]
    rounded-lg text-black text-xl font-extrabold
    shadow-[0_3px_0_#0c6b0c]
    active:translate-y-[2px] active:shadow-none"
            >
              +
            </button>
          </div>

          {/* Spin */}
          <div className="flex flex-col gap-2 items-center">
            <p className="text-center text-xs text-gray-300 mt-2 cursor-pointer">
              HOLD FOR AUTOSPIN
            </p>
            <button
              onClick={onSpin}
              className="px-6 py-3 rounded-full bg-gradient-to-b from-yellow-400 to-orange-500 text-black font-extrabold text-xl shadow-[0_0_15px_rgba(255,200,0,0.8)] cursor-pointer"
            >
              SPIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

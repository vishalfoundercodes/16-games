import React from "react";

export default function GameHeader({ setMenuOpen,menuOpen }) {
  const [balance, setBalance] = React.useState(1000);
    const handleAdd = () => {
      setBalance((prev) => prev + 10);
    };
  return (
    <div className="w-full flex justify-between items-center px-1 py-3 xsm:px-4">
      <div className="flex gap-1 xsm:gap-2">
        {["🏠", "⚙️", "❓"].map((i, idx) => (
          <button key={idx} className="top-icon">
            {i}
          </button>
        ))}
      </div>

      <div className="flex items-center px-2">
        {/* LEFT COIN */}
        <div
          className="relative z-10 w-8 h-8 xsm:w-9 xsm:h-9 rounded-full 
        bg-gradient-to-b from-yellow-300 to-yellow-600
        border-2 border-yellow-400
        shadow-[0_4px_8px_rgba(0,0,0,0.6)]
        flex items-center justify-center text-black font-bold"
        >
          G
        </div>

        {/* CENTER BAR */}
        <div
          className="-ml-2 -mr-2 px-6 h-8 flex items-center justify-center
        bg-gradient-to-b from-[#2a1408] to-[#0f0703]
        border border-yellow-700
        rounded-md
        shadow-inner text-white font-semibold text-sm min-w-[60px]"
        >
          {balance}
        </div>

        {/* RIGHT PLUS */}
        <button
          onClick={handleAdd}
          className="relative z-10 w-8 h-8 xsm:w-9 xsm:h-9 rounded-md cursor-pointer
        bg-gradient-to-b from-yellow-300 to-yellow-600
        border-2 border-yellow-400
        shadow-[0_4px_8px_rgba(0,0,0,0.6)]
        flex items-center justify-center
        text-black text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="leaderboard text-2xl xsm:text-3xl">
        🏆
        {/* <span className=" hidden xsm:block">Leaderboard</span>  */}
      </div>
    </div>
  );
}

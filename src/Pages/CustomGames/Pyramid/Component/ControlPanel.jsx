import useSlotMachine from "./useMachine";

export default function ControlPanel({
  spin,
  spinning,
  bet,
  setBet,
  winAmount,
}) {
  const increaseBet = () => setBet((prev) => Math.min(prev + 50, 1000));
  const decreaseBet = () => setBet((prev) => Math.max(prev - 50, 50));

  return (
    <div className="px-4 py-4 bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 rounded-t-3xl mt-4 shadow-2xl">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xs text-gray-300 mb-1">Bet Amount</p>
          <div className="flex items-center gap-2">
            <button
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
              onClick={decreaseBet}
              disabled={spinning}
            >
              -
            </button>
            <span className="font-bold text-xl text-yellow-400 min-w-[60px] text-center">
              {bet}
            </span>
            <button
              className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
              onClick={increaseBet}
              disabled={spinning}
            >
              +
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-300 mb-1">Win Amount</p>
          <p className="text-2xl font-bold text-green-400">{winAmount}</p>
        </div>

        <button
          className={`px-8 py-4 rounded-full font-bold shadow-2xl text-lg transition-all ${
            spinning
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-green-400 to-green-600 text-black hover:scale-105 active:scale-95"
          }`}
          onClick={spin}
          disabled={spinning}
        >
          {spinning ? "..." : "SPIN"}
        </button>
      </div>
    </div>
  );
}

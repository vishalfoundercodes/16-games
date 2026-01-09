import React from "react";
import { X } from "lucide-react";

export default function MenuModal({
  open,
  onClose,
  sound,
  setSound,
  music,
  setMusic,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="w-[300px] bg-gradient-to-b from-purple-900 to-black rounded-2xl border-2 border-yellow-500 p-5 text-white relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:scale-110 cursor-pointer"
        >
          <X />
        </button>

        <h2 className="text-center text-xl font-bold text-yellow-400 mb-5">
          GAME MENU
        </h2>

        {/* Sound Toggle */}
        <div className="flex justify-between items-center mb-4">
          <span>🔊 Sound</span>
          <button
            onClick={() => setSound(!sound)}
            className={`px-4 py-1 rounded-full font-semibold ${
              sound ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {sound ? "ON" : "OFF"}
          </button>
        </div>

        {/* Music Toggle */}
        <div className="flex justify-between items-center mb-4">
          <span>🎵 Music</span>
          <button
            onClick={() => setMusic(!music)}
            className={`px-4 py-1 rounded-full font-semibold ${
              music ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {music ? "ON" : "OFF"}
          </button>
        </div>

        {/* Bet History */}
        <button
          onClick={() => {
            console.log("Open Bet History");
            onClose();
          }}
          className="w-full mt-4 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold"
        >
          📜 Bet History
        </button>
      </div>
    </div>
  );
}

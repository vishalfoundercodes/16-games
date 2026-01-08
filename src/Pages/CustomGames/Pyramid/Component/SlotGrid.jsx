import { useEffect, useState } from "react";
import Reel from "./Reel";

export default function SlotGrid({ reels, spinning }) {
  return (
    <div className="mx-3 mt-4 bg-gradient-to-b from-purple-950 to-black p-4 rounded-xl border-4 border-yellow-500 shadow-2xl">
      <div className="grid grid-cols-5 ">
        {reels.map((reel, index) => (
          <Reel
            key={index}
            symbols={reel}
            delay={index * 200}
            spinning={spinning}
          />
        ))}
      </div>
    </div>
  );
}

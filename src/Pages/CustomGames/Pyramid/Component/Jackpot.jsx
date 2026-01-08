import React, { useEffect, useState } from "react";
export default function JackpotBar() {
  const [jackpot, setJackpot] = useState(125000);

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-3 mt-3 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 p-3 rounded-lg shadow-xl">
      <div className="text-center">
        <p className="text-xs text-black font-semibold">JACKPOT</p>
        <p className="text-2xl font-bold text-black tracking-wider">
          ${jackpot.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

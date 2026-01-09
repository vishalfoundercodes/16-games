import React, { useEffect, useState } from "react";

export default function JackpotBar() {
  const [jackpots, setJackpots] = useState({
    grand: 4000,
    major: 2000,
    minor: 1000,
    mini: 500,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpots((prev) => ({
        grand: prev.grand + Math.floor(Math.random() * 5),
        major: prev.major + Math.floor(Math.random() * 4),
        minor: prev.minor + Math.floor(Math.random() * 3),
        mini: prev.mini + Math.floor(Math.random() * 2),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "GRAND", value: jackpots.grand, color: "from-red-600 to-red-400" },
    {
      label: "MAJOR",
      value: jackpots.major,
      color: "from-pink-600 to-pink-400",
    },
    {
      label: "MINOR",
      value: jackpots.minor,
      color: "from-blue-600 to-blue-400",
    },
    {
      label: "MINI",
      value: jackpots.mini,
      color: "from-green-600 to-green-400",
    },
  ];

  return (
    <div className="mx-3 mt-3 grid grid-cols-4 gap-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-black rounded-lg border-2 border-yellow-500 shadow-lg overflow-hidden"
        >
          {/* TOP LABEL */}
          <div
            className={`bg-gradient-to-r ${item.color} text-center text-xs font-bold text-white py-1`}
          >
            {item.label}
          </div>

          {/* AMOUNT */}
          <div className="text-center py-2">
            <p className="text-white text-lg font-bold tracking-wide">
              {item.value.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

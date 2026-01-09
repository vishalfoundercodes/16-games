import Reel from "./Reel";

export default function SlotGrid({ reels, spinning }) {
  
  return (
    <div className="mx-3 mt-4 bg-gradient-to-b from-purple-950 to-black p-4 rounded-xl border-4 border-yellow-500 shadow-2xl">
      <div className="grid grid-cols-5 divide-x-2 divide-yellow-600">
        {reels.map((reel, index) => (
          <div
            key={index}
            className={`
              ${
                index !== reels.length - 1
                  ? "border-r border-yellow-500/40"
                  : ""
              }
            `}
          >
            <Reel symbols={reel} delay={index * 200} spinning={spinning}  />
          </div>
        ))}
      </div>
    </div>
  );
}

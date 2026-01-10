import Reel from "./Reel";
import BgImage from "../../../../assets/Pyramid_Slot/games-section.png";

export default function SlotGrid({ reels, spinning }) {
  
  return (
    <div
      className="mx-3 mt-0 bg-gradient-to-b from-purple-950 to-black p-0 rounded-2xl  shadow-2xl"
      style={{ background: "transparent" }}
      // style={{
      //   backgroundImage: `url(${BgImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
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
            <Reel symbols={reel} delay={index * 200} spinning={spinning} />
          </div>
        ))}
      </div>
    </div>
  );
}

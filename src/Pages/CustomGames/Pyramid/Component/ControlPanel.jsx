import useSlotMachine from "./useMachine";
import ControlImage from "../../../../assets/Pyramid_Slot/game-control.png";
import BetImage from "../../../../assets/Pyramid_Slot/bet.png";
import SpinImage from "../../../../assets/Pyramid_Slot/spinImage.png";
import minusImage from "../../../../assets/Pyramid_Slot/minus-button.png";
import addImage from "../../../../assets/Pyramid_Slot/add-button.png";
import walletShow from "../../../../assets/Pyramid_Slot/wallet-show.png";

// export default function ControlPanel({
//   spin,
//   spinning,
//   bet,
//   setBet,
//   winAmount,
// }) {
//   const increaseBet = () => setBet((prev) => Math.min(prev + 50, 1000));
//   const decreaseBet = () => setBet((prev) => Math.max(prev - 50, 50));

//   return (
//     <div
//       className="px-1 py-4  rounded-t-3xl mt-4 shadow-2xl"
//       style={{
//         backgroundImage: `url(${ControlImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="flex items-center justify-between mb-2">
//         <div>
//           <p className="text-xs text-gray-300 mb-1">Bet Amount</p>
//           <div className="flex items-center gap-2">
//             <button
//               className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
//               onClick={decreaseBet}
//               disabled={spinning}
//               style={{
//                 backgroundImage: `url(${minusImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               -
//             </button>
//             <div
//               className=""
//               style={{
//                 backgroundImage: `url(${BetImage})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <span className="font-bold text-xl text-yellow-400 min-w-[60px] text-center">
//                 {bet}
//               </span>
//               <button
//                 className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg active:scale-95 transition-transform"
//                 onClick={increaseBet}
//                 disabled={spinning}
//                 style={{
//                   backgroundImage: `url(${addImage})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="text-center">
//           <p className="text-2xl font-bold text-green-400">{winAmount}</p>
//           <p className="text-xs text-gray-300 mb-1">Win Amount</p>
//         </div>

//         <button
//           className={`px-12 py-5 xsm:px-21 xsm:py-9  font-bold shadow-2xl text-lg transition-all ${
//             spinning
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-gradient-to-r from-green-400 to-green-600 text-black hover:scale-105 active:scale-95"
//           }`}
//           onClick={spin}
//           disabled={spinning}
//           style={{
//             backgroundImage: `url(${SpinImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* {spinning ? "..." : "SPIN"} */}
//         </button>
//       </div>
//     </div>
//   );
// }

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
    <div className="w-full rounded-t-3xl px-3 py-4 mt-4 relative">
      <div className="flex items-center justify-between gap-2 sm:gap-4 ">
        {/* BET SECTION */}
        {/* <div className="flex flex-col items-center">
          <span className="text-xs text-gray-300 mb-1">Bet</span>

          <div
            className="flex items-center gap-2 px-2 py-2 rounded-xl -ml-2 -mt-24"
            style={{
              backgroundImage: `url(${BetImage})`,
              backgroundSize: "cover",
            }}
          >
            <button
              onClick={decreaseBet}
              disabled={spinning}
              className="w-9 h-9 active:scale-95 -mb-24"
              style={{
                backgroundImage: `url(${minusImage})`,
                backgroundSize: "cover",
              }}
            />

            <span className="min-w-[60px] text-center text-xl font-bold text-white mt-4">
              {bet}
            </span>

            <button
              onClick={increaseBet}
              disabled={spinning}
              className="w-9 h-9 active:scale-95 -mb-24"
              style={{
                backgroundImage: `url(${addImage})`,
                backgroundSize: "cover",
              }}
            />
          </div>
        </div> */}
        {/* BET SECTION */}
        {/* BET SECTION */}
        <div className="flex flex-col items-center w-[75px] xsm4:w-[100px] xsm3:w-[90px] xsm:w-[120px] sm:w-[110px]">
          {/* BET IMAGE */}
          <div
            className="relative w-full h-[40px] xsm4:h-[60px] xsm3:h-[40px] sm:h-[50px] flex flex-col justify-between items-center py-0.5"
            style={{
              backgroundImage: `url(${BetImage})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* BET TEXT (TOP CENTER) */}
            <span className="text-vsm xsm4:text-xs lg2:text-ssm sm:text-sm font-semibold text-gray-200 -mt-1 ">
              Bet
            </span>

            {/* BET VALUE (BOTTOM CENTER) */}
            <span className="text-xl sm:text-2xl font-bold text-white -mt-4">
              {bet}
            </span>
          </div>

          {/* MINUS / PLUS BUTTONS */}
          <div className="flex items-start gap-4 mb-2">
            <button
              onClick={decreaseBet}
              disabled={spinning}
              className="w-10 h-9 active:scale-95"
              style={{
                backgroundImage: `url(${minusImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            <button
              onClick={increaseBet}
              disabled={spinning}
              className="w-10 h-9 active:scale-95"
              style={{
                backgroundImage: `url(${addImage})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>

        {/* WIN SECTION */}
        <div className="flex flex-col items-center justify-center px-4 py-1 rounded-xl  -mt-12 ml-0 xsm:ml-0 lg2:ml-4">
          <span className="text-2xl font-bold text-white">{winAmount}</span>
          <span className="text-sm text-yellow-300">Win</span>
        </div>

        {/* SPIN BUTTON */}
        <button
          onClick={spin}
          disabled={spinning}
          className={`w-[90px] xsm4:w-[110px] xsm:w-[130px] sm:w-[138px] h-[39px] xsm4:h-[40px] xsm:h-[60px] sm:h-[50px] rounded-xl transition-all -mr-2 xsm:mr-0 lg2:-mr-2 xsm4:-mr-1 xsm3:-mr-3 xxs:-mr-1
            ${
              spinning
                ? "opacity-50 cursor-not-allowed"
                : "active:scale-95 hover:scale-105"
            }
          `}
          style={{
            backgroundImage: `url(${SpinImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* WALLET BOTTOM CENTER */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div
          className="
    flex items-center justify-end mb-2 xsm3:mb-0.5
    px-3 sm:px-4 md:px-6
    py-1
    w-[80px] sm:w-[120px] md:w-[120px]
    h-[20px] sm:h-[30px] md:h-[20px]
  "
          style={{
            backgroundImage: `url(${walletShow})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <span className="text-white font-semibold text-ssm sm:text-base pr-1 sm:pr-2">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

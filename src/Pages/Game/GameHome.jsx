import React,{useEffect} from "react";
import PyramidLogo from "../../assets/GameImage/pyramid.jpg";
import BonusLogo from "../../assets/GameImage/Bonus.webp";
import CrashLogo from "../../assets/GameImage/Crash.jpg";
import FootballClubLogo from "../../assets/GameImage/FootballClub.jpg";
import FruitPartyLogo from "../../assets/GameImage/FruitParty.jpg";
import GateofOlimposLogo from "../../assets/GameImage/GateofOlimpos.jpg";
import GreedyBoxLogo from "../../assets/GameImage/GreedyBox.jpg";
import GreedyLionLogo from "../../assets/GameImage/GreedyLion.jpg";
import IngotLogo from "../../assets/GameImage/Ingot.jpg";
import LuckySlotLogo from "../../assets/GameImage/LuckySlot.jpg";
import PirateKingLogo from "../../assets/GameImage/PirateKing.jpg";
import pyramidLogo from "../../assets/GameImage/pyramid.jpg";
import ruletLogo from "../../assets/GameImage/Rulet.jpg";
import SeaHunterLogo from "../../assets/GameImage/SeaHunter.jpg";
import StrugeLogo from "../../assets/GameImage/Struge.jpg";
import SuperCarLogo from "../../assets/GameImage/SuperCar.jpg";
import YummyLogo from "../../assets/GameImage/Yummy.jpg";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const games = [
  {
    id: 1,
    name: "pyramid_slots",
    route: "pyramid",
    logo: PyramidLogo,
  },
  { id: 2, name: "greedy_box", route: "greedy", logo: GreedyBoxLogo },
  { id: 3, name: "pirate_king", route: "pirate", logo: PirateKingLogo },
  { id: 4, name: "greedy_lion", route: "greedy-lion", logo: GreedyLionLogo },
  {
    id: 5,
    name: "football_club",
    route: "football",
    logo: FootballClubLogo,
  },
  { id: 6, name: "crash", route: "crash", logo: CrashLogo },
  { id: 7, name: "fruit_party", route: "fruit", logo: FruitPartyLogo },
  { id: 8, name: "struge", route: "struge", logo: StrugeLogo },
  { id: 9, name: "lucky_slot", route: "lucky", logo: LuckySlotLogo },
  { id: 10, name: "sea_hunter", route: "sea", logo: SeaHunterLogo },
  { id: 11, name: "bonus", route: "bonus", logo: BonusLogo },
  { id: 12, name: "ingot", route: "ingot", logo: IngotLogo },
  { id: 13, name: "rulet", route: "rulet", logo: ruletLogo },
  {
    id: 14,
    name: "super_car",
    route: "super-car",
    logo: SuperCarLogo,
  },
  {
    id: 15,
    name: "gate_of_olympus",
    route: "goo",
    logo: GateofOlimposLogo,
  },
  { id: 16, name: "yummy", route: "yummy", logo: YummyLogo },
];



export default function GameHome() {
    const navigate = useNavigate();
    const { t } = useTranslation();
  return (
    <div className="pb-4">
      {/* Title */}
      <h2 className="text-white text-lg font-semibold mb-1 p-4">🎮 Games</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 xsm:grid-cols-4 gap-4 px-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-grayLight rounded-xl p-3 flex flex-col items-center justify-center active:scale-95 transition"
            onClick={() => navigate(`/game/${game.route}`)}
          >
            {/* Logo */}
            <div className="w-16 h-16 mb-2 bg-primary rounded-lg flex items-center justify-center">
              <img
                src={game.logo}
                alt={game.name}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Name */}
            <p className="text-xs text-center text-gray-200">
              {t(`${game.name}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

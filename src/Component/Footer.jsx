// import React from 'react'

// export default function Footer() {
//   return (
//     <div>
//       i am footer.
//     </div>
//   )
// }

import React from "react";
import { Link, useLocation } from "react-router-dom";
import homeLight from "../assets/footer/account_color.png";
import home_color from "../assets/footer/home_color.png";
import activityLight from "../assets/footer/activityLight.png";
import activity_color from "../assets/footer/activity_color.png";
import walletLight from "../assets/footer/Wallet.png";
import wallet_color_bg from "../assets/footer/Wallet.png";
import accountLight from "../assets/footer/accountLight.png";
import account_color from "../assets/footer/account_color.png";
import diamond from "../assets/footer/activity_color.png";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

function Footer() {
    const {t} = useTranslation();
  const location = useLocation();
  const userId = localStorage.getItem("userId");

  return (
    <div
      className="z-40 relative grid grid-cols-5 pt-2 items-center h-[5rem] bg-primary"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopLeftRadius: "1.5rem",
        borderTopRightRadius: "1.5rem",
      }}
    >
      {/* Home */}
      <Link to="/" className="col-span-1 flex flex-col items-center">
        <img
          src={location.pathname === "/" ? home_color : homeLight}
          className="w-8 h-8"
          alt="home"
        />
        <p
          className={`text-xs ${
            location.pathname === "/" ? "text-orange" : "text-metal"
          }`}
        >
          {t("Home")}
        </p>
      </Link>

      {/* Activity */}
      <Link to="/activity" className="col-span-1 flex flex-col items-center">
        <img
          src={
            location.pathname === "/activity" ? activity_color : activityLight
          }
          className="w-8 h-8"
          alt="activity"
        />
        <p
          className={`text-xs ${
            location.pathname === "/activity" ? "text-orange" : "text-metal"
          }`}
        >
          {t("Activity")}
        </p>
      </Link>

      {/* Promotion (Center Icon) */}
      <Link
        to="/promotion"
        className="col-span-1 -mt-9 flex flex-col items-center"
      >
        <img src={diamond} className="w-14 -mt-3" alt="promotion" />
        <p
          className={`text-xs ${
            location.pathname === "/promotion"
              ? "text-orange"
              : "text-metal"
          }`}
        >
          {t("Promotion")}
        </p>
      </Link>

      {/* Wallet / Login */}
      <Link
        to={userId ? "/wallet" : "/login"}
        className="col-span-1 flex flex-col items-center"
      >
        <img
          src={location.pathname === "/wallet" ? wallet_color_bg : walletLight}
          className="w-8 h-8"
          alt="wallet"
        />
        <p
          className={`text-xs ${
            location.pathname === "/wallet"
              ? "text-orange"
              : "text-metal"
          }`}
        >
          {userId ? t("Wallet") : t("Login")}
        </p>
      </Link>

      {/* Profile / Login */}
      <Link
        to={userId ? "/profile" : "/login"}
        className="col-span-1 flex flex-col items-center"
      >
        <img
          src={location.pathname === "/profile" ? account_color : accountLight}
          className="w-8 h-8"
          alt="account"
        />
        <p
          className={`text-xs ${
            location.pathname === "/profile"
              ? "text-orange"
              : "text-metal"
          }`}
        >
          {userId ? t("Profile") : t("Login")}
        </p>
      </Link>
    </div>
  );
}

export default Footer;

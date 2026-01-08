import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gameLogo from "../assets/react.svg";
import axios from "axios";
import { apis } from "../utils/apis";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

export default function Header() {
  const userId = localStorage.getItem("userId");
  const [wallet, setWallet] = useState(0);
  const { t } = useTranslation();

  const [openLang, setOpenLang] = useState(false);
  const dropdownRef = useRef(null);

  // fetch wallet if logged in
  useEffect(() => {
    if (!userId) return;

    const fetchWallet = async () => {
      try {
        const res = await axios.get(`${apis.profile}${userId}`);
        if (res?.data?.success === 200) {
          setWallet(res.data.data?.wallet_amount || 0);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchWallet();
  }, [userId]);

  // close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-primary shadow-sm">
      <div className="max-w-[500px] mx-auto px-3 py-2 flex items-center justify-between">
        {/* Logo */}
        {/* <img src={gameLogo} alt="logo" className="h-10 object-contain" /> */}
        <Link to="/">
          <h1 className="text-white font-bold text-xl">16 Games</h1>
        </Link>

        {/* Right Side */}
        {userId ? (
          <div className="bg-golden px-3 py-1 rounded-md text-xs font-semibold text-sky-700">
            ₹ {wallet}
          </div>
        ) : (
          <div className="flex items-center gap-2 relative" ref={dropdownRef}>
            {/* Language Dropdown Button */}
            <button
              onClick={() => setOpenLang(!openLang)}
              className="px-3 py-1 text-xs text-golden border border-golden rounded-md"
            >
              {i18n.language === "en" ? "English" : "Turkish"}
            </button>

            {/* Dropdown */}
            {openLang && (
              <div className="absolute right-16 top-10 w-24 bg-grayLight rounded-md shadow-lg overflow-hidden z-50">
                <button
                  className={`w-full px-3 py-2 text-left text-xs ${
                    i18n.language === "en"
                      ? "bg-golden text-white"
                      : "text-gray-300 hover:bg-grayLight2"
                  }`}
                  onClick={() => {
                    i18n.changeLanguage("en");
                    setOpenLang(false);
                  }}
                >
                  English
                </button>
                <button
                  className={`w-full px-3 py-2 text-left text-xs ${
                    i18n.language === "tr"
                      ? "bg-golden text-white"
                      : "text-gray-300 hover:bg-grayLight2"
                  }`}
                  onClick={() => {
                    i18n.changeLanguage("tr");
                    setOpenLang(false);
                  }}
                >
                  Turkish
                </button>
              </div>
            )}

            {/* Login Button */}
            <Link
              to="/login"
              className="px-2 py-1 text-xs text-golden border border-golden rounded-md"
            >
              {t("Login")}
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

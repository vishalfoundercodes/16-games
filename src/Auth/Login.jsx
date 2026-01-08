import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loginType, setLoginType] = useState("phone"); // phone | email
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    phone: "",
    countryCode: "+91",
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = () => {
    let payload;

    if (loginType === "phone") {
      payload = {
        login_type: "phone",
        phone: formData.countryCode + formData.phone,
        password: formData.password,
        remember: formData.remember,
      };
    } else {
      payload = {
        login_type: "email",
        email: formData.email,
        password: formData.password,
        remember: formData.remember,
      };
    }

    console.log("LOGIN PAYLOAD 👉", payload);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="w-full bg-grayLight rounded-xl p-6 text-white">
        {/* Header */}
        <h2 className="text-2xl font-semibold mb-1">{t("login")}</h2>
        <p className="text-sm text-gray-400 mb-6">{t("login_subtitle")}</p>

        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-700">
          <button
            onClick={() => setLoginType("phone")}
            className={`flex-1 pb-2 ${
              loginType === "phone"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400"
            }`}
          >
            {t("phone_number")}
          </button>

          <button
            onClick={() => setLoginType("email")}
            className={`flex-1 pb-2 ${
              loginType === "email"
                ? "text-gold border-b-2 border-gold"
                : "text-gray-400"
            }`}
          >
            {t("email_login")}
          </button>
        </div>

        {/* PHONE LOGIN */}
        {loginType === "phone" && (
          <>
            <label className="block mb-2">{t("phone")}</label>
            <div className="flex mb-4">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="bg-grayLight2 px-3 rounded-l-md"
              >
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="1234567890"
                className="flex-1 bg-grayLight2 px-3 py-2 rounded-r-md outline-none"
              />
            </div>
          </>
        )}

        {/* EMAIL LOGIN */}
        {loginType === "email" && (
          <>
            <label className="block mb-2">{t("email")}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full bg-grayLight2 px-3 py-2 rounded-md outline-none mb-4"
            />
          </>
        )}

        {/* PASSWORD */}
        <label className="block mb-2">{t("password")}</label>
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-grayLight2 px-3 py-2 rounded-md outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Remember */}
        <div className="flex items-center mb-6 text-sm text-gray-400">
          <input
            type="checkbox"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
            className="mr-2"
          />
          {t("remember_password")}
        </div>

        {/* Buttons */}
        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-yellow-start to-yellow-end text-black py-2 rounded-full font-semibold mb-3"
        >
          {t("login")}
        </button>

        <button
          onClick={() => navigate("/register")}
          className="w-full border border-yellow-start text-yellow-end py-2 rounded-full"
        >
          {t("register")}
        </button>
      </div>
    </div>
  );
}

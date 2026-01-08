import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    countryCode: "+91",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    inviteCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = () => {
    const payload = {
      phone: `${form.countryCode}${form.phone}`,
      email: form.email,
      password: form.password,
      confirm_password: form.confirmPassword,
      invite_code: form.inviteCode,
    };

    console.log("REGISTER PAYLOAD 👉", payload);
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="w-full bg-grayLight rounded-xl p-6 text-white">
        <h2 className="text-xl font-semibold text-gold mb-6">
          {t("register_phone")}
        </h2>

        {/* Phone */}
        <label className="block mb-2">{t("phone_number")}</label>
        <div className="flex mb-4">
          <select
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className="bg-grayLight2 px-3 rounded-l-md"
          >
            <option value="+91">+91</option>
          </select>

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="text"
            placeholder="Enter your phone number"
            className="flex-1 bg-grayLight2 px-3 py-2 rounded-r-md outline-none"
          />
        </div>

        {/* Email */}
        <label className="block mb-2">{t("email")}</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Please enter the Email"
          className="w-full bg-grayLight2 px-3 py-2 rounded-md mb-4 outline-none"
        />

        {/* Password */}
        <label className="block mb-2">{t("set_password")}</label>
        <div className="relative mb-4">
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-grayLight2 px-3 py-2 rounded-md outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-2.5 text-gray-400"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Confirm Password */}
        <label className="block mb-2">{t("confirm_password")}</label>
        <div className="relative mb-4">
          <input
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
            className="w-full bg-grayLight2 px-3 py-2 rounded-md outline-none"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-2.5 text-gray-400"
          >
            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Invite Code */}
        <label className="block mb-2">{t("invite_code")}</label>
        <input
          name="inviteCode"
          value={form.inviteCode}
          onChange={handleChange}
          type="text"
          placeholder="Please enter the invitation code"
          className="w-full bg-grayLight2 px-3 py-2 rounded-md outline-none mb-6"
        />

        {/* Register */}
        <button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-yellow-start to-yellow-end text-black py-2 rounded-full font-semibold mb-4"
        >
          {t("register")}
        </button>

        {/* Login */}
        <p className="text-center text-sm text-gray-400">
          {t("have_account")}{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-gold cursor-pointer hover:underline"
          >
            {t("login")}
          </span>
        </p>
      </div>
    </div>
  );
}

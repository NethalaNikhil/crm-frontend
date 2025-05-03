"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "", login: "" });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: "", login: "" });
  };

  const handleLogin = async () => {
    const newErrors = {
      username: form.username ? "" : "Please enter username",
      password: form.password ? "" : "Please enter password",
      login: "",
    };

    setErrors(newErrors);
    if (newErrors.username || newErrors.password) return;

    try {
      const response = await axios.post(`${apiUrl}/login`, form);
      if (response.status === 201) {
        localStorage.setItem("jwtToken", response.data);
        router.push("/dashboard");
      }
    } catch (error) {
      setErrors((prev) => ({
        ...prev,
        login: error.response?.status === 401
          ? "Invalid username or password"
          : "An error occurred. Please try again.",
      }));
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start px-8 md:px-16">
          <Image src="/skillcapital.png" alt="Logo" width={350} height={300} className="mb-8" />
          <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6">
            {["username", "password"].map((field) => (
              <div key={field} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  value={form[field]}
                  onChange={handleChange(field)}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                />
                {errors[field] && <p className="text-red-600 text-sm">{errors[field]}</p>}
              </div>
            ))}

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-orange-300 to-pink-500 text-white py-2 rounded mt-2 hover:opacity-90 transition"
            >
              Login
            </button>

            {errors.login && <p className="text-red-600 text-sm mt-2">{errors.login}</p>}

            <div className="flex items-center mt-4">
              <input type="checkbox" id="remember" className="mr-2 accent-pink-500" />
              <label htmlFor="remember" className="text-gray-600 text-sm">Remember Me</label>
            </div>

            <p className="text-center text-gray-500 text-sm mt-10">© 2024, All rights reserved</p>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold text-center text-[#242424] max-w-md mb-4">
            Seamlessly manage all learner data in a unified platform.
          </h1>
          <p className="text-lg text-center text-black opacity-50 max-w-md mb-6">
            Centralize customer data effortlessly. Streamline communication,
            sales, and support for seamless growth.
          </p>
          <Image src="/pinkcrm.png" width={800} height={533} alt="CRM" className="mt-4 ms-16" />
        </div>
      </div>
    </main>
  );
}

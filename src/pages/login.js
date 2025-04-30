"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = async () => {
    let hasError = false;
    if (username === "") {
      setUsernameError("Please enter username");
      hasError = true;
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Please enter password");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      try {
        const response = await axios.post(`${apiUrl}/login`, {
          username,
          password,
        });

        if (response.status === 201) {
          const jwtToken = response.data;
          localStorage.setItem("jwtToken", jwtToken);
          router.push("/dashboard");
        }
      } catch (error) {
        if (error.response?.status === 401) {
          setLoginError("Invalid username or password");
        } else {
          setLoginError("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start px-8 md:px-16">
          <Image
            src="/skillcapital.png"
            alt="Logo"
            width={350}
            height={300}
            className="mb-8"
          />
          <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 mb-1"
            />
            {usernameError && (
              <p className="text-red-600 text-sm mb-2">{usernameError}</p>
            )}

            <label className="block text-sm font-medium text-gray-700 mt-4 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300 mb-1"
            />
            {passwordError && (
              <p className="text-red-600 text-sm mb-2">{passwordError}</p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-orange-300 to-pink-500 text-white py-2 rounded mt-6 hover:opacity-90 transition"
            >
              Login
            </button>
            {loginError && (
              <p className="text-red-600 text-sm mt-2">{loginError}</p>
            )}

            <div className="flex items-center mt-4">
              <input
                type="checkbox"
                id="remember"
                className="mr-2 accent-pink-500"
              />
              <label htmlFor="remember" className="text-gray-600 text-sm">
                Remember Me
              </label>
            </div>

            <p className="text-center text-gray-500 text-sm mt-10">
              © 2024, All rights reserved
            </p>
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
          <Image
            src="/pinkcrm.png"
            width={800}
            height={533}
            alt="CRM"
            className="mt-4 ms-16"
          />
        </div>
      </div>
    </main>
  );
}

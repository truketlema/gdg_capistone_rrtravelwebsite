import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !phoneNumber) {
      setError("All fields are required!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find(
      (user: { email: string }) => user.email === email
    );

    if (userExists) {
      setError("User already exists!");
      return;
    }

    const newUser = { email, password, phoneNumber };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Sign Up
        </h2>

        {/* Social Buttons */}
        <div className="grid grid-cols-1 gap-2 mb-4">
          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 bg-white rounded-md py-2 text-sm hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-4 h-4"
              alt="Google"
            />
            Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 bg-white rounded-md py-2 text-sm hover:bg-gray-50 transition">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              className="w-4 h-4"
              alt="Facebook"
            />
            Sign up with Facebook
          </button>
        </div>

        <div className="text-center text-sm text-gray-500 mb-4">OR</div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 text-sm transition"
          >
            Sign Up
          </button>
        </form>

        {/* Terms */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By signing up you agree to our{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>
          .
        </p>

        {/* Newsletter */}
        <div className="mt-3 flex items-center text-sm">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="mr-2"
          />
          <label>Email me with news and updates</label>
        </div>

        {/* Login Link */}
        <div className="text-center mt-5">
          <p className="text-xs text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-green-600 font-medium hover:underline text-xs"
            >
              Log in
            </button>
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="text-red-500 text-center mt-3 text-sm">{error}</div>
        )}
      </div>
    </div>
  );
};

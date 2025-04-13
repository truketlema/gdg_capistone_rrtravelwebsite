import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Email and Password are required!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const user = existingUsers.find(
      (user: { email: string; password: string }) => user.email === email
    );

    if (!user) {
      setError("User not found!");
      return;
    }

    if (user.password !== password) {
      setError("Incorrect password!");
      return;
    }
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    alert("Login successful!");
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 flex-col">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-green-600 mb-5">
          Login
        </h2>

        {error && (
          <div className="text-red-500 text-center mb-4 text-sm">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-1.5 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1.5 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <span className="text-gray-600 text-sm">Don't have an account?</span>{" "}
          <button
            onClick={() => navigate("/SignUp")}
            className="text-green-600 font-medium text-sm hover:underline bg-transparent"
          >
            Sign up
          </button>
        </div>
      </div>
      <Link to="/" className="text-blue-500 underline block mt-8 text-center">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

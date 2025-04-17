import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agree, setAgree] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic email format validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email || !password || !phoneNumber) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = existingUsers.find(
      (user: { email: string }) => user.email === email
    );

    if (userExists) {
      setError("User already exists!");
      setLoading(false);
      return;
    }

    // Proceed to register the new user
    const newUser = { email, password, phoneNumber };

    try {
      // Simulate saving the new user to your mock API
      const response = await fetch(
        "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );

      const data = await response.json();

      if (response.ok) {
        existingUsers.push(data); // Adding the new user to the local storage
        localStorage.setItem("users", JSON.stringify(existingUsers));

        localStorage.setItem("loggedInUser", JSON.stringify(data));
        alert("User registered successfully!");
        navigate("/login");
      } else {
        setError(data.message || "Something went wrong, please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 flex-col pt-4 pb-4">
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
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 text-sm transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
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
              className="text-green-600 font-medium hover:underline text-xs bg-transparent"
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
      <Link to="/" className="text-blue-500 underline block mt-8 text-center">
        ⬅ Back to Home
      </Link>
    </div>
  );
};

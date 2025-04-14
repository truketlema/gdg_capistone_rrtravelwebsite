import type React from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { MdEmail, MdFacebook } from "react-icons/md";
import footerbg from "../assets/footerbg.png";
import { useState } from "react";
import logo from "../assets/footer-logo.png";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div>
      {/* Subscription part */}
      <div
        className="text-white bg-cover bg-center text-center py-12 px-4"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold">
            Subscribe to get special price
          </h1>
          <p className="opacity-80 leading-relaxed pt-4 font-semibold">
            Don't wanna miss something? Subscribe right now and get special
            promotion and monthly newsletter.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-row sm:flex-row justify-between items-center bg-white rounded-full px-2 py-1 mt-10 w-[90%] md:w-[60%]  lg:w-[40%] mx-auto"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Type your email here"
            value={email}
            className="p-2 px-4 text-black w-52 border-none focus:outline-none rounded-full mb-2 sm:mb-0 sm:mr-2 "
          />
          <button
            type="submit"
            className="bg-black text-white rounded-full hover:scale-105 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footerpart */}
      <div className="flex flex-col md:flex-row justify-center gap-10 items-start py-10 px-6 md:px-12 bg-white text-black">
        {/* Logo */}
        <div className="w-full md:w-1/4 space-y-4">
          <img src={logo} alt="Logo" width="200" />
          <p className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/4 space-y-3">
          <h3 className="font-semibold">Contact Information</h3>
          <p className="flex items-center gap-2 opacity-70">
            <FaLocationDot />
            <a
              href="https://www.google.com/maps?q=732+Despard+St,+Atlanta"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              732 Despard St, Atlanta
            </a>
          </p>
          <p className="flex items-center gap-2 opacity-70">
            <MdEmail />
            <a href="mailto:info@traveller.com" className="hover:underline">
              info@traveller.com
            </a>
          </p>
          <p className="flex items-center gap-2 opacity-70">
            <FaPhone />
            <a href="tel:+9788888888" className="hover:underline">
              +97 888 8888
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 space-y-3">
          <h3 className="font-semibold pb-1">Quick Links</h3>
          <ul className="space-y-2 opacity-70">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <Link to="/about_us">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link to="#">Tours</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 space-y-3">
          <h3 className="font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-xl opacity-70">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <MdFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-white text-center py-6 text-sm">
        © All rights reserved (Website Developed & Managed by creativechroma)
      </div>
    </div>
  );
}

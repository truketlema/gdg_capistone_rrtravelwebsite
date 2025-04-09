import type React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
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
      <div
        className="h-screen text-white bg-cover bg-center text-center pt-12"
        style={{ backgroundImage: `url(${footerbg})` }}
      >
        <div>
          <h1 className="text-[4vw] ">Subscribe to get special price</h1>
          <p className="opacity-70 leading-[1.6] whitespace-pre-line text-center pt-4">
            Dont wanna miss something? subscribe right now and get special{" "}
            {"\n"}
            promotion and monthly newsletter
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex  justify-between items-center bg-white rounded-full px-1 pl-3 py-1 w-[70vw]  md:w-[60vw] lg:w-[40vw] mx-auto m-0 mt-16"
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Type your email here"
              value={email}
              className="p-2 px-8 border rounded-md  focus:ring-0 text-black w-full border-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black-500 text-white text-[14px] px-4 py-3 rounded-full border-none "
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 items-start py-6  text-black mx-auto text-sm sm:text-[15px] md:text-base">
        <div className=" max-w-[300px] flex flex-col gap-4 items-start min-w-[150px]">
          <img src={logo} alt="Logo" width="250" height="40" />
          <p className="opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>

        <div className=" max-w-[300px] flex flex-col gap-2 items-start min-w-[150px]">
          <h3 className="font-semibold">Contact Information</h3>
          <p className="flex items-center gap-2 opacity-70">
            <FaLocationDot />
            732 Despard St, Atlanta
          </p>
          <p className="flex items-center gap-2 opacity-70">
            <MdEmail />
            +97 888 8888
          </p>
          <p className="flex items-center gap-2 opacity-70">
            <FaPhone />
            info@traveller.com
          </p>
        </div>

        <div className=" max-w-[300px] flex flex-col gap-2 items-start min-w-[150px]">
          <h3 className="font-semibold pb-1">Quick Link</h3>
          <ul className="space-y-1 opacity-70">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About us</Link>
            </li>
            <li>
              <Link to="#">Tours</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className=" max-w-[300px] flex flex-col gap-2 items-start min-w-[150px]">
          <h3 className="font-semibold">Follow us</h3>
          <ul className="flex flex-row gap-4 pt-2 opacity-70">
            <li>
              <MdFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaYoutube />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </div>

      {/* copy right section */}
      <div className="bg-black text-white text-center py-8 text-opacity-70">
        Copyright © All rights reserved (Website Developed & Managed by
        creativechroma)
      </div>
    </div>
  );
}

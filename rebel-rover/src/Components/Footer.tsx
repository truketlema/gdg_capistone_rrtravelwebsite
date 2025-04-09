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
            className="flex  justify-between items-center bg-white rounded-full px-1 pl-3 py-1 w-[40vw] mx-auto m-0 mt-16"
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
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 text-black">
        <div className="text-black bg-white">
          <img src={logo} alt="Logo" width="250" height="40" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            pharetra condimentum.
          </p>
        </div>
        <div>
          <h3>Contact Information</h3>
          <p>
            <FaLocationDot />
            732 Despard St, Atlanta
          </p>
          <p>
            <MdEmail />
            +97 888 8888
          </p>
          <p>
            <FaPhone />
            info@traveller.com
          </p>
        </div>
        <div>
          <h3>Quick Link</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/packages">Package</Link>
            </li>
            <li>
              <Link to="#">Destination</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul>
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
    </div>
  );
}

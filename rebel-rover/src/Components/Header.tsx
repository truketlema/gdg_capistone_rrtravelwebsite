import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import profilePlaceholder from "../assets/profileplaceholder.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(user);
      setProfilePicture(parsedUser.profilePicture || profilePlaceholder); // ✅ FIXED
    }
  }, []);

  return (
    <header className="bg-[rgba(10,28,108,0.7)] text-white px-6 py-4">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto relative">
        <img
          src={logo || "/placeholder.svg"}
          alt="Logo"
          width="250"
          height="40"
        />

        <ul
          className="hidden md:flex items-center gap-6 sm:gap-8 md:gap-4 lg:gap-8 xl:gap-10 
          text-[17px] lg:text-[18px] xl:text-[18px] transition-all duration-200"
        >
          <li className="flex items-center ml-4 mr-8">
            <Link to="/">Home</Link>
          </li>

          <li className="relative flex items-center gap-1 md:hidden lg:flex">
            <Link to="about_us" className="flex items-center gap-0.5">
              About us <RiArrowDropDownLine className="text-2xl" />
            </Link>
            {menuOpen && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0">
                <li>
                  <Link to="/about_us/option1">Option 1</Link>
                </li>
                <li>
                  <Link to="/about_us/option2">Option 2</Link>
                </li>
                <li>
                  <Link to="/about_us/option3">Option 3</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative flex items-center gap-2">
            <Link to="/packages" className="flex items-center gap-0.5">
              Package <RiArrowDropDownLine className="text-2xl" />
            </Link>
            {menuOpen && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0">
                <li>
                  <Link to="/packages/option1">Option 1</Link>
                </li>
                <li>
                  <Link to="/packages/option2">Option 2</Link>
                </li>
                <li>
                  <Link to="/packages/option3">Option 3</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative flex items-center gap-1">
            <Link to="/blog/:id" className="flex items-center gap-0.5">
              Blog <RiArrowDropDownLine className="text-2xl" />
            </Link>
            {menuOpen && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0">
                <li>
                  <Link to="/blog/option1">Option 1</Link>
                </li>
                <li>
                  <Link to="/blog/option2">Option 2</Link>
                </li>
                <li>
                  <Link to="/blog/option3">Option 3</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="#">
              <FaSearch className="text-lg" />
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="/profile">
                <img
                  src={profilePicture || profilePlaceholder} // ✅ FIXED
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-1 border-white hover:opacity-80 transition"
                  onError={(e) => (e.currentTarget.src = profilePlaceholder)}
                />
              </Link>
            </li>
          )}
        </ul>

        <button
          className="md:hidden text-2xl bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className="flex flex-col mt-4 gap-3 md:hidden text-sm text-white">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/packages" onClick={() => setMenuOpen(false)}>
              Package
            </Link>
          </li>
          <li>
            <Link to="about_us" onClick={() => setMenuOpen(false)}>
              About us
            </Link>
          </li>
          <li>
            <Link to="/blog/:id" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="#" onClick={() => setMenuOpen(false)}>
              <FaSearch className="inline-block mr-1" /> Search
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/profile" onClick={() => setMenuOpen(false)}>
                <img
                  src={profilePicture || profilePlaceholder}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  onError={(e) => (e.currentTarget.src = profilePlaceholder)}
                />
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

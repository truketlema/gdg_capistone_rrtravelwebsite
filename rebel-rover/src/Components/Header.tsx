import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import profilePlaceholder from "../assets/profileplaceholder.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setNewProfilePicture] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
      setIsLoggedIn(true);
      const parsedUser = JSON.parse(user);
      setNewProfilePicture(parsedUser.profilePicture || profilePlaceholder);
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
        <div className="hidden md:flex">
          <ul>
            <li className="flex items-center ml-4 mr-8 text-[17px] ] lg:text-[18px] xl:text-[18px] transition-all duration-200">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
        <ul
          className="hidden md:flex items-center  gap-8 sm:gap-8 md:gap-2 lg:gap-8 xl:gap-10 
          text-[17px] ] lg:text-[18px] xl:text-[18px] transition-all duration-200"
        >
          <li className="relative flex items-center gap-2">
            <Link to="/packages" className="flex items-center gap-0.5">
              Package
            </Link>
            <RiArrowDropDownLine
              className="text-2xl cursor-pointer"
              onClick={() => toggleDropdown("package")}
            />
            {openDropdown === "package" && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0 bg-[rgba(10,28,108,0.7)]">
                <li>
                  <Link to="/destination/option1">Destination</Link>
                </li>
                <li>
                  <Link to="/destination/option2">Tips & Articles</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative flex items-center gap-2 lg:flex">
            <Link to="/destination" className="flex items-center gap-0.5">
              Destination
            </Link>
            <RiArrowDropDownLine
              className="text-2xl cursor-pointer"
              onClick={() => toggleDropdown("destination")}
            />
            {openDropdown === "destination" && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0 bg-[rgba(10,28,108,0.7)]">
                <li>
                  <Link to="/destination/option1">Destination</Link>
                </li>
                <li>
                  <Link to="/destination/option2">Tips & Articles</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="relative flex items-center gap-2">
            <Link to="/blog/:id" className="flex items-center gap-0.5">
              Blog
            </Link>
            <RiArrowDropDownLine
              className="text-2xl cursor-pointer"
              onClick={() => toggleDropdown("blog")}
            />
            {openDropdown === "blog" && (
              <ul className="absolute text-white mt-2 p-2 space-y-2 w-40 top-full left-0 bg-[rgba(10,28,108,0.7)]">
                <li>
                  <Link to="/blog/:id/option1">Stories</Link>
                </li>
                <li>
                  <Link to="/blog/:id/option2">Recent posts</Link>
                </li>
                <li>
                  <Link to="/blog/:id/option3">Comment</Link>
                </li>
              </ul>
            )}
          </li>

          <li className="max-lg:hidden">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="max-lg:hidden">
            <Link to="#">
              <FaSearch className="text-lg" />
            </Link>
          </li>

          {isLoggedIn && (
            <li>
              <Link to="/profile">
                <img
                  src={profilePicture || profilePlaceholder}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-1 border-white hover:opacity-80 transition"
                />
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl bg-transparent"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile toggle menu */}
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
            <Link to="/destination" onClick={() => setMenuOpen(false)}>
              Destination
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
                  src={profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white"
                />
              </Link>
            </li>
          )}
        </ul>
      )}
    </header>
  );
}

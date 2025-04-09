import { Link } from "react-router-dom";
import logo from "../assets/logo1 1.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-[rgba(10,28,108,0.7)] flex items-center gap-32 px-10 py-4">
      <img
        src={logo || "/placeholder.svg"}
        alt="Logo"
        width="250"
        height="40"
      />

      <ul className="flex gap-16 text-white">
        <li className="pr-20 flex items-center">
          <Link to="/">Home</Link>
        </li>

        <li className="flex items-center gap-1">
          <Link to="/packages" className="flex items-center gap-0.5">
            Package <RiArrowDropDownLine className="text-3xl" />
          </Link>
        </li>

        <li className="flex items-center gap-1">
          <Link to="#" className="flex items-center gap-0.5">
            Destination <RiArrowDropDownLine className="text-3xl" />
          </Link>
        </li>

        <li className="flex items-center gap-1">
          <Link to="/blog/:id" className="flex items-center gap-0.5">
            Blog <RiArrowDropDownLine className="text-3xl" />
          </Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="#">
            <FaSearch className="text-lg" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

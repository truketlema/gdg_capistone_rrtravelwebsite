import { Link } from "react-router-dom"; // Import Link
import logo from "../assets/logo1 1.png";

export default function Header() {
  return (
    <div className="bg-[rgba(10,28,108,0.7)] flex items-center justify-between px-6 py-1">
      <img
        src={logo || "/placeholder.svg"}
        alt="Logo"
        width="250"
        height="40"
      />
      <ul className="flex gap-6 text-white">
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
          <Link to="//blog/:id">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="#">Search</Link>
        </li>
      </ul>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className="w-screen fixed top-0 left-0 z-10 bg-[#F0F0F0]"
      style={{
        padding: "20px 40px",
      }}
    >
      <nav className="flex items-center justify-between">
        <div className="w-[150px] cursor-pointer">
          <img src="/images/logo.svg" alt="Logo" className="w-full object-cover" />
        </div>
        <ul className="flex gap-20 items-center">
          <li>
            <Link to="/courses">
              <p className="text-2">Course program</p>
            </Link>
          </li>
          <li>
            <Link to="/bootcamp">
              <p className="text-2">Bootcamp</p>
            </Link>
          </li>
          <li>
            <Link to="/community">
              <p className="text-2">Community</p>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <p className="text-2">About us</p>
            </Link>
          </li>
          <li>
            <Link to={"/language"}>
              <p className="text-2">Eng</p>
            </Link>
          </li>
        </ul>
        <Link className="text button px-10 py-3 rounded-lg cursor-pointer">
        <p className="cursor-pointer">
          Get started
        </p>
        </Link>
      </nav>
    </header>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header
      className=" w-screen fixed top-0 left-0 "
      style={{
        padding: "20px 30px",
      }}
    >
      <nav className="flex items-center justify-between">
        <div className="w-[150px]">
          <img src="/images/logo.svg" alt="" className="w-full object-cover " />
        </div>
        <ul className="flex gap-20 items-center">
          <li>
            <Link to={"/"}>
              <p className="text-2">Course program</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p className="text-2">Bootcamp</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p className="text-2">Community</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p className="text-2">About us</p>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <p className="text-2">Eng</p>
            </Link>
          </li>
        </ul>
        <Link
          style={{
            padding: "10px 50px",
            cursor: "pointer",
          }}
          to={"/home"}
          className="button flex justify-center items-center rounded-lg"
        >
          <p className="text">Get Start</p>
        </Link>
      </nav>
    </header>
  );
}

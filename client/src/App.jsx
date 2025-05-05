import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
    <Navbar />
      <main className="w-screen overflow-hidden relative">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

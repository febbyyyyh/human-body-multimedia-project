// src/components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoPutih from "../assets/logo-putih.svg";

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="flex justify-between items-center bg-[#4FC3F7] px-6 py-3 shadow-md">
            <div className="flex items-center gap-2">
                <img src={logoPutih} alt="AnatoKid Logo" className="w-10" />
                <h1 className="text-white font-bold text-xl">AnatoKid</h1>
            </div>

            <ul className="flex gap-6 text-white font-semibold">
                <li>
                    <Link
                        to="/"
                        className={`hover:underline ${location.pathname === "/" ? "underline" : ""
                            }`}
                    >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link
                        to="/belajar"
                        className={`hover:underline ${location.pathname === "/belajar" ? "underline" : ""
                            }`}
                    >
                        Belajar
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

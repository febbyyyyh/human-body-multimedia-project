import React from "react";
import { Link } from "react-router-dom";
import homeVector from "../assets/home-vector.svg";
import logoPutih from "../assets/logo-putih.svg";
import button from "../assets/button.svg";

export default function Home() {
    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${homeVector})`,
            }}
        >
            {/* Navbar */}
            <nav className="w-full px-6 pt-6 sm:px-8 sm:pt-8 md:px-16 md:pt-10 absolute top-0 left-0">
                <Link to="/">
                    <img
                        src={logoPutih}
                        alt="AnatoKid Logo"
                        className="w-24 sm:w-28 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                </Link>
            </nav>

            {/* Konten teks di tengah + tombol */}
            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6">
                <h1
                    className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-md mb-4"
                    style={{ textShadow: "2px 2px 0 #fff" }}
                >
                    Tubuhku Hebat!
                </h1>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                    Setiap bagian tubuh punya tugas penting, lho! Yuk, kenalan dengan para organ tubuh
                    yang selalu bekerja keras menjaga kita tetap semangat setiap hari.
                </p>

                {/* Tombol Ayo Belajar */}
                <Link
                    to="/belajar"
                    className="inline-block hover:scale-105 transition-transform duration-200"
                >
                    <img
                        src={button}
                        alt="Tombol Ayo Belajar"
                        className="w-28 sm:w-36 md:w-44 lg:w-52"
                    />
                </Link>
            </div>
        </div>
    );
}

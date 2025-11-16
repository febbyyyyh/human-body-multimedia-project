import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logoKuning from "../assets/logo-kuning.svg";
import organLengkap from "../assets/organ-lengkap.png";

// import semua card organ
import cardParu from "../assets/card-paru.svg";
import cardJantung from "../assets/card-jantung.svg";
import cardLambung from "../assets/card-lambung.svg";
import cardUsus from "../assets/card-usus.svg";
import cardHati from "../assets/card-hati.svg";
import cardGinjal from "../assets/card-ginjal.svg";

export default function Belajar() {
    const navigate = useNavigate();

    const cards = [
        { id: 1, img: cardParu, nama: "Paru-paru", path: "paru" },
        { id: 2, img: cardJantung, nama: "Jantung", path: "jantung" },
        { id: 3, img: cardLambung, nama: "Lambung", path: "lambung" },
        { id: 4, img: cardUsus, nama: "Usus", path: "usus" },
        { id: 5, img: cardHati, nama: "Hati", path: "hati" },
        { id: 6, img: cardGinjal, nama: "Ginjal", path: "ginjal" },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navbar Versi 2 */}
            <nav className="w-full px-6 pt-6 sm:px-8 sm:pt-8 md:px-16 md:pt-10">
                <Link to="/">
                    <img
                        src={logoKuning}
                        alt="AnatoKid Logo"
                        className="w-24 sm:w-28 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                </Link>
            </nav>

            {/* Section 1: Gambar utama */}
            <section className="flex justify-center items-center mt-6 md:mt-10">
                <img
                    src={organLengkap}
                    alt="Gambar organ tubuh lengkap"
                    className="w-[90%] max-w-[1000px] md:max-w-[1200px] object-contain"
                />
            </section>

            {/* Section 2: Kartu organ tubuh */}
            <section className="flex flex-col items-center mt-10 mb-16">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => navigate(`/detail/${card.path}`)}
                            className="flex flex-col items-center hover:scale-105 transition-transform duration-200 cursor-pointer"
                        >
                            <img
                                src={card.img}
                                alt={card.nama}
                                className="w-36 sm:w-44 md:w-52"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

import React from "react";
import { useParams, Link } from "react-router-dom";
import logoKuning from "../assets/logo-kuning.svg";
import funfact from "../assets/funfact.svg";
import { Volume2 } from "lucide-react"; // ikon speaker dari lucide-react

// gambar organ
import paru from "../assets/paru.svg";
import jantung from "../assets/jantung.svg";
import lambung from "../assets/lambung.svg";
import usus from "../assets/usus.svg";
import hati from "../assets/hati.svg";
import ginjal from "../assets/ginjal.svg";

export default function DetailKonten() {
    const { organ } = useParams();

    const dataOrgan = {
        paru: {
            nama: "Paru-paru",
            gambar: paru,
            deskripsi:
                "Paru-paru membantu kita bernapas! Saat kita menarik napas, paru-paru mengambil oksigen dari udara, dan saat kita menghembuskan napas, paru-paru membuang karbon dioksida. Tanpa paru-paru, tubuh kita tidak akan mendapatkan udara segar yang dibutuhkan untuk hidup dan bergerak.",
            fakta: "Paru-paru bentuknya mirip dua spons besar di dalam dada!",
        },
        jantung: {
            nama: "Jantung",
            gambar: jantung,
            deskripsi:
                "Jantung adalah pompa ajaib yang tidak pernah berhenti bekerja! Tugasnya memompa darah ke seluruh tubuh agar membawa oksigen dan zat gizi. Jantung berdetak setiap detik untuk menjaga kita tetap hidup dan berenergi.",
            fakta: "Jantungmu berdetak sekitar 100.000 kali setiap hari!",
        },
        lambung: {
            nama: "Lambung",
            gambar: lambung,
            deskripsi:
                "Lambung adalah tempat makanan pergi setelah kita makan. Di sini, makanan diolah dan dicampur dengan cairan khusus agar berubah menjadi bagian-bagian kecil yang bisa digunakan tubuh sebagai energi.",
            fakta: "Asam di lambung sangat kuat, tapi tenang saja—dinding lambung melindungi kita dari bahayanya!",
        },
        usus: {
            nama: "Usus",
            gambar: usus,
            deskripsi:
                "Setelah dari lambung, makanan masuk ke usus. Di sinilah zat gizi diserap ke dalam darah agar tubuh bisa tumbuh dan tetap sehat. Usus juga membantu mengeluarkan sisa makanan dari tubuh.",
            fakta: "Kalau ususmu direntangkan, panjangnya bisa hampir sepanjang sebuah bus!",
        },
        hati: {
            nama: "Hati",
            gambar: hati,
            deskripsi:
                "Hati adalah pahlawan pembersih di dalam tubuh! Hati membantu membersihkan darah, menyimpan energi, dan membuat cairan khusus untuk membantu mencerna makanan. Hati juga membantu melawan kuman agar tubuh tetap sehat.",
            fakta: "Hati bisa tumbuh kembali kalau sebagian bagiannya rusak!",
        },
        ginjal: {
            nama: "Ginjal",
            gambar: ginjal,
            deskripsi:
                "Ginjal bekerja seperti saringan ajaib. Mereka membersihkan darah dengan membuang kotoran dan air berlebih, lalu mengubahnya menjadi urine (air kencing). Ginjal juga menjaga keseimbangan cairan dalam tubuh kita.",
            fakta: "Kita punya dua ginjal, tapi satu saja sudah cukup untuk bekerja dengan baik!",
        },
    };

    const organData = dataOrgan[organ];

    // Fungsi untuk memutar suara
    const speak = (text) => {
        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = "id-ID"; // bahasa Indonesia
        speech.pitch = 1;
        speech.rate = 1;
        window.speechSynthesis.cancel(); // hentikan jika ada suara sebelumnya
        window.speechSynthesis.speak(speech);
    };

    if (!organData) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-center">
                <h2 className="text-2xl font-semibold text-gray-700">Ups! Organ tidak ditemukan 😅</h2>
                <Link to="/belajar" className="mt-6 text-blue-500 underline">
                    Kembali ke halaman belajar
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Navbar */}
            <nav className="w-full px-6 pt-6 sm:px-8 sm:pt-8 md:px-16 md:pt-10">
                <Link to="/">
                    <img
                        src={logoKuning}
                        alt="AnatoKid Logo"
                        className="w-24 sm:w-28 md:w-40 cursor-pointer hover:scale-105 transition-transform duration-200"
                    />
                </Link>
            </nav>

            {/* Konten Utama */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 px-8 md:px-20 py-10">
                {/* Gambar Organ */}
                <img
                    src={organData.gambar}
                    alt={organData.nama}
                    className="w-64 sm:w-80 md:w-[400px] object-contain"
                />

                {/* Deskripsi dan Fakta */}
                <div className="max-w-xl text-gray-800">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-3">
                        {organData.nama}
                        <button
                            onClick={() => speak(organData.deskripsi)}
                            className="p-2 bg-yellow-300 hover:bg-yellow-400 rounded-full transition"
                            title="Dengarkan deskripsi"
                        >
                            <Volume2 className="w-5 h-5 text-white" />
                        </button>
                    </h1>

                    <p className="text-base sm:text-lg leading-relaxed mb-6">
                        {organData.deskripsi}
                    </p>

                    {/* Funfact section */}
                    <div className="flex items-center gap-5 mt-4">
                        <img
                            src={funfact}
                            alt="Fun fact"
                            className="w-16 sm:w-20 md:w-24"
                        />
                        <div className="bg-sky-400 text-white px-6 py-5 rounded-xl shadow-md w-fit max-w-sm">
                            <p className="text-base sm:text-lg font-semibold mb-2">Fakta Menarik:</p>
                            <p className="text-sm sm:text-base leading-relaxed">{organData.fakta}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol kembali */}
            <div className="flex justify-center mb-10">
                <Link
                    to="/belajar"
                    className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full transition"
                >
                    Kembali ke Belajar
                </Link>
            </div>
        </div>
    );
}

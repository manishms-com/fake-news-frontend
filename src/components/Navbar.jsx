import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import Button from "./Button"

const navLinks = [
    {
        id: 1,
        name: "Home",
        to: "/",
    },
    {
        id: 2,
        name: "About",
        to: "/about",
    },
    {
        id: 3,
        name: "How It Works",
        to: "/how-it-works",
    },
];

function Navbar() {
    const [darkMode, setDarkMode] = useState(() =>
        document.documentElement.classList.contains("dark")
    );

    const toggleDarkMode = () => {
        const nextDarkMode = !darkMode;
        document.documentElement.classList.toggle("dark", nextDarkMode);
        setDarkMode(nextDarkMode);
    };

    return (
        <nav
            className="
                sticky
                top-4
                z-50
                mx-2 my-4 sm:mx-4
                rounded-2xl
                border
                border-white/10
                p-2
                shadow-2xl
                backdrop-blur-xl
                
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-between
                    px-2 py-2
                    sm:px-4 sm:py-3
                    md:px-6
                "
            >
                <Link
                    to="/"
                    className="
                        text-2xl
                        font-logo
                        font-bold
                        uppercase
                        text-amber-600
                        sm:text-xl
                    "
                >
                    Fake
                    <span className="text-white dark:text-purple-400">
                        News
                    </span>
                </Link>

                <div className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.to}
                            className="
                                shrink-0
                                rounded-xl
                                px-4
                                py-2
                                font-logo
                                font-medium
                                text-amber-300
                                transition-all
                                duration-500
                                ease-out
                                hover:-translate-y-0.5
                                hover:bg-white/60
                                hover:text-purple-700
                                dark:text-white
                            "
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Button
                    onClick={toggleDarkMode}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-black/20
                        px-4
                        py-2
                        text-gray-800
                        transition-all
                        duration-300
                        hover:bg-black/30
                        sm:p-1
                    "
                >
                    {darkMode ? (
                        <>
                            <MdLightMode className="text-lg" />
                            Light Mode
                        </>
                    ) : (
                        <>
                            <MdDarkMode className="text-lg" />
                            Dark Mode
                        </>
                    )}
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;
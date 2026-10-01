import { Link } from "react-router-dom";
import Button from "./Button";

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
    return (
        <nav className="sticky 
        top-4 
        glass-panel 
        p-2 
        m-4 
        rounded-2xl
        z-50">
            <div className="px-4 
            py-3
            md:px-6
            md:py-4 
            flex 
            items-center 
            justify-between">
                <Link to="#home" className="text-2xl font-logo uppercase text-bold text-gray-800">
                    Fake<span className="text-purple-600">News</span>
                </Link>

                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.id}
                            to={link.to}
                            className="rounded-xl
                                        font-logo
                                        px-4
                                        py-2
                                        font-medium
                                        text-slate-700
                                        transition-all
                                        duration-500
                                        ease-out
                                        hover:bg-white/60
                                        hover:text-purple-700
                                        hover:-translate-y-0.5
                                        "

                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Button className="p-2 bg-black/20">Dark Mode</Button>
            </div>
        </nav>
    );
}

export default Navbar;
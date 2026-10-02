import { useState } from "react";
import Button from "../components/Button";
import { TbWorldSearch } from "react-icons/tb";

export default function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <>
            <div className="m-4 flex justify-center p-2">
                <div className="relative w-fit">
                    <h2
                        className="
                text-2xl
                md:text-2xl
                font-logo
                font-bold
                uppercase
                bg-linear-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent
                overflow-hidden
                whitespace-nowrap
                animate-[typewriter_6s_steps(20)_infinite,blink_0.7s_step-end_infinite]
            "
                    >
                        Check your news here
                    </h2>
                </div>
            </div>
            <div className="glass-panel">

                <div className="flex 
            flex-col 
            gap-3
            sm:flex-row
            sm:items-center">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for to check news truthness"
                        className="flex-1
                        min-w-0
                        rounded-xl
                        border
                        border-white/40
                        bg-white/20
                        px-6
                        py-3
                        m-2
                        text-gray-800
                        placeholder:text-gray-500
                        outline-none
                        backdrop-blur-md
                        transition
                        duration-300
                        "
                    />

                    <Button className=" m-2 p-2 inline-flex items-center justify-center" onClick={handleSearch}>
                        Search Here<TbWorldSearch className="text-lg" />
                    </Button>


                </div>
            </div>
        </>
    );
}
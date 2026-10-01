import { useState } from "react";
import Button from "../components/Button";

export default function SearchBox({ onSearch }) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query);
        }
    };

    return (
        <div className=" glass-panel  ">
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
                    className="w-full
                        rounded-xl
                        border
                        border-white/30
                        bg-white/20
                        px-6
                        py-3
                        m-1
                        text-gray-800
                        placeholder:text-gray-500
                        outline-none
                        backdrop-blur-md
                        transition
                        duration-300
                        "
                />
                <Button className=" m-2" onClick={handleSearch}>
                    Search Here
                </Button>
            </div>
        </div>
    );
}
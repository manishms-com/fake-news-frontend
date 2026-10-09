import { useState } from "react";
import axios from "axios";
import SearchBox from "../sections/searchBox";
import About from "./About"
import ResultDisplay from "../sections/resultDisplay";
import { useNavigate } from "react-router-dom";
import mockData from "../mockdata";


axios.defaults.baseURL = import.meta.env.backend_url;



export default function Home() {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (query) => {
        try {
            setLoading(true);
            console.log("Searching for:", query);

            {/* 
                const response = await axios.post("/check", {
                 claim: query
             });

             console.log("API Response:", response.data);

             const result = response.data?.data || response.data;

            */}
            const result = mockData;
            await new Promise((resolve) => setTimeout(resolve, 8000));

            setSearchResult(result);

            navigate("/results", {
                state: {
                    query: query,
                    result: result
                }
            });

        } catch (error) {
            console.error("Search failed:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="animate-[searchSlide_4s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]">
            <SearchBox onSearch={handleSearch} />
            {(loading || searchResult) && (
                <ResultDisplay
                    data={searchResult}
                    loading={loading}
                />
            )}
            {/*<About /> */}

        </div>
    );
}
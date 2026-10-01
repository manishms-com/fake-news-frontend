import { useState } from "react";
import axios from "axios";
import SearchBox from "../sections/searchBox";
import ResultDisplay from "../sections/resultDisplay";
import { useNavigate } from "react-router-dom";
import mockData from "../mockdata";

 {/*
    axios.defaults.baseURL =
     "https://sabrixter--fake-news-detector-fastapi-app.modal.run/";

     */}

export default function Home() {
    const navigate = useNavigate();
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = async (query) => {
        try {
            console.log("Searching for:", query);

            {/* 
                const response = await axios.post("/check", {
                 claim: query
             });

             console.log("API Response:", response.data);

             const result = response.data?.data || response.data;

             */}
            const result = mockData;

            setSearchResult(result);

            navigate("/results", {
                state: {
                    query: query,
                    result: result
                }
            });

        } catch (error) {
            console.error("Search failed:", error);
        }
    };

    return (
        <div className="">



            <SearchBox onSearch={handleSearch} />

            {searchResult && (
                <ResultDisplay data={searchResult} />
            )}

        </div>
    );
}
import { useState } from "react";
import Button from "../components/Button";
import { FaSquareArrowUpRight } from "react-icons/fa6";


function ResultDisplay({ data }) {
    const [filter, setFilter] = useState("all");

    if (!data || !data.score) {
        return (
            <div
                className="
                    w-full
                    rounded-3xl
                    border
                    border-white/90
                    bg-white/25
                    p-8
                    text-center
                    shadow-xl
                    backdrop-blur-xl
                "
            >
                <p className="text-gray-700">
                    No results found.
                </p>
            </div>
        );
    }
    const { score } = data;
    const { verdict, supporting_score, neutral_score, contradicting_score, results } = score;

    const counts = {
        all: results.length,

        entailment: results.filter(
            (i) => i.relationship === "entailment"
        ).length,

        neutral: results.filter(
            (i) => i.relationship === "neutral"
        ).length,

        contradiction: results.filter(
            (i) => i.relationship === "contradiction"
        ).length,

    }

    const filteredResults =
        filter === "all"
            ? results
            : results.filter(
                (item) => item.relationship === filter
            );

    return (
        <div className="w-full space-y-6">
            <div className="glass-panel px-6 py-5 flex items-center justify-center">
                <h2 className="text-sm
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-gray-700
                        sm:text-base
                        font-logo">
                    Analysis Result
                </h2>
            </div>

            <div className="glass-panel grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex  flex-col justify-center p-3">
                    <h4 className="text-sm
                        font-bold
                        uppercase
                        text-gray-700
                        sm:text-base">
                        Evidence Distribution
                    </h4>

                    <div className="analysis-result-box">
                        <span className="">Supporting Score</span>
                        <span className="">{supporting_score.toFixed(2)}</span>
                    </div>

                    <div className="analysis-result-box">
                        <span className="">Neutral Score</span>
                        <span className="">{neutral_score.toFixed(2)}</span>
                    </div>

                    <div className="analysis-result-box">
                        <span className="">Contradicting Score</span>
                        <span className="">{contradicting_score.toFixed(2)}</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-gray-700 text-xs tracking-[0.2em] uppercase font-logo mb-4">
                        Verdict
                    </h3>
                    <div
                        className={`text-3xl md:text-4xl font-logo font-bold ${verdict.toLowerCase() === 'true' ? 'text-emerald-400' : 'text-rose-400'}`}                    >
                        {verdict.toUpperCase()}
                    </div>
                </div>
            </div>

            <div className="">
                <div className="glass-panel flex flex-col md:flex-row flex-wrap gap-3 justify-between px-6 py-5 ">
                    <h2 className="text-sm
                        font-bold
                        uppercase
                        tracking-[0.25em]
                        text-gray-700
                        sm:text-base">
                        Analysis Sources
                    </h2>
                    <div className="">

                        <Button
                            className={filter === "all" ? "active" : ""}
                            onClick={() => setFilter("all")}
                        >
                            All ({counts.all})
                        </Button>

                        <Button
                            className={filter === "entailment" ? "active supporting" : ""}
                            onClick={() => setFilter("entailment")}
                        >
                            Supporting ({counts.entailment})
                        </Button>

                        <Button
                            className={filter === "neutral" ? "active neutral" : ""}
                            onClick={() => setFilter("neutral")}
                        >
                            Neutral ({counts.neutral})
                        </Button>

                        <Button
                            className={
                                filter === "contradiction"
                                    ? "active contradicting"
                                    : ""
                            }
                            onClick={() => setFilter("contradiction")}
                        >
                            Contradicting ({counts.contradiction})
                        </Button>

                    </div>
                </div>

                <div className="">
                    <ul className="p-2 m-2 ">
                        {filteredResults.map((item, index) => (
                            <li
                                key={index}
                                className="glass-panel p-2 m-1"
                            >


                                <div className="flex justify-between">
                                    <strong className="">
                                        {item.result.title}
                                    </strong>
                                    <Button
                                        className="m-1 p-2 inline-flex items-center justify-center gap-2"
                                        onClick={() => window.open(item.result.url, "_blank", "noopener,noreferrer")}
                                    >
                                        View<FaSquareArrowUpRight/>
                                    </Button>

                                </div>
                                <div className="flex justify-end"><small className="">
                                    Relationship: {item.relationship}
                                </small></div>
                            </li>
                        ))}
                    </ul>
                    {filteredResults.length === 0 && (
                        <p className="glass-panel ">
                            No evidence found for this category.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ResultDisplay;
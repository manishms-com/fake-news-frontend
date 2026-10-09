import { useLocation, useNavigate } from "react-router-dom";
import ResultDisplay from "../sections/resultDisplay";
import Button from "../components/Button";

function ResultsPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const searchQuery = location.state?.query || "latest";
    const result = location.state?.result || null;

    return (
        <div className="w-full px-2 py-4 sm:px-4 md:px-6 md:py-5">

            <div
                className="
                    glass-panel
                    m-1 sm:m-2
                    rounded-2xl
                    px-3 py-4
                    sm:px-5 sm:py-5
                    md:px-6
                "
            >
                <div
                    className="
                        flex flex-col
                        gap-3
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <Button
                        className="
                            inline-flex
                            w-full sm:w-auto
                            items-center
                            justify-center
                            rounded-xl
                            px-4 py-2
                        "
                        onClick={() => navigate("/")}
                    >
                        Back to Home
                    </Button>


                    <h2
                        className="
                            min-w-0
                            text-sm
                            font-bold
                            uppercase
                            leading-relaxed
                            text-center
                            text-white
                            wrap-break-words
                            sm:text-right
                            sm:text-base
                        "
                    >
                        Showing results for:
                        <span
                            className="
                                mt-1
                                block
                                bg-linear-to-r
                                from-amber-300
                                via-pink-300
                                to-violet-300
                                bg-clip-text
                                text-transparent
                                normal-case
                                wrap-break-words
                            "
                        >
                            {searchQuery}
                        </span>
                    </h2>
                </div>
            </div>

            <div className="mt-4 min-w-0">
                {result ? (
                    <ResultDisplay data={result} />
                ) : (
                    <p
                        className="
                            glass-panel
                            rounded-2xl
                            p-6 sm:p-8
                            text-center
                            text-white
                        "
                    >
                        No results found.
                    </p>
                )}
            </div>

        </div>
    );
}

export default ResultsPage;

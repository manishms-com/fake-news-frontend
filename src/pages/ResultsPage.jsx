import { useLocation, useNavigate } from 'react-router-dom';
import ResultDisplay from '../sections/resultDisplay';
import Button from '../components/Button';

function ResultsPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const searchQuery = location.state?.query || 'latest';
    const result = location.state?.result || null;

    return (
        <div className="w-full px-6 py-5">

            <div className="glass-panel px-6 py-5 m-2">
                <div className="flex justify-between">
                    <Button className='p-2 ' onClick={() => navigate('/')}>
                        Back to Home
                    </Button>
                    <h2 className="text-sm
                        font-bold
                        uppercase
                        text-gray-700
                        sm:text-base">
                        Showing results for: <span className="results-query">{searchQuery}</span>
                    </h2>
                </div>
            </div>

            {result ? <ResultDisplay data={result} /> : <p className="glass-panel empty-state">No results found.</p>}
        </div>
    );
}

export default ResultsPage;
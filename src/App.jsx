
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";


export default function App() {
  return (
    <div  className="min-h-screen bg-[url('./assests/LIGHT_BACK.jpg')] bg-cover bg-center bg-no-repeat scroll-smooth ">
      <div className="p-2">
        <Navbar/>

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}



import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import About from "./pages/About";


export default function App() {
  return (
    <div  className="min-h-screen bg-[url('./assests/LIGHT_BACK.jpg')] bg-cover bg-center bg-no-repeat scroll-smooth ">
      <div className="p-2">
        <Navbar/>

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import About from "./pages/About";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden scroll-smooth">

      <div
        className="
                    fixed
                    inset-0
                    -z-10
                    bg-[url('./assests/LIGHT_BACK.jpg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                    opacity-100
                    transition-opacity
                    duration-1000
                    ease-in-out
                    dark:opacity-0
                "
      />

      <div
        className="
                    fixed
                    inset-0
                    -z-10
                    bg-[url('./assests/DARK_BACK.jpg')]
                    bg-cover
                    bg-center
                    bg-no-repeat
                    opacity-0
                    transition-opacity
                    duration-1000
                    ease-in-out
                    dark:opacity-100
                "
      />

      <div className="relative z-10 p-2 animate-[pageLoad_0.8s_ease-out] ">

        <div className="animate-[navbarDrop_4s_cubic-bezier(0.16,1,0.3,1)_both]">
          <Navbar />
        </div>

        <main>
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
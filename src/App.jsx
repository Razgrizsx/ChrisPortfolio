import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import { GsapProvider } from "./provider/GsapProvider";

function App() {
  return (
    <main className="bg-white">
      <GsapProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/cabin" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </GsapProvider>
    </main>
  );
}

export default App;

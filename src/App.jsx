import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cabin" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;

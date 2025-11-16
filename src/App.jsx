import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Belajar from "./pages/Belajar";
import DetailKonten from "./pages/DetailKonten";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/belajar" element={<Belajar />} />
        <Route path="/detail/:organ" element={<DetailKonten />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Imoveis from './pages/Imoveis';
import Historia from './pages/Historia';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/imoveis" element={<Imoveis />} />
                <Route path="/historia" element={<Historia />} />
              </Routes>
              <Footer />
    </Router>
  );
}

export default App;

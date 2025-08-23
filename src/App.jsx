import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home'; 
import Imoveis from './pages/Imoveis'; 
import Historia from './pages/Historia'; 



function App() {
  return (
    <Router>
   

      <Routes>
     
        <Route path="/" element={<Imoveis />} />

       
        <Route path="/imoveis" element={<Imoveis />} />
        <Route path="/historia" element={<Historia />} />
        
      
      </Routes>

      
    </Router>
  );
}

export default App;

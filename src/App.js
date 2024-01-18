import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import "./App.css"
import ProductDetail from './pages/ProductDetail';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Feedbacks from './components/Feedbacks';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedbacks" element={<Feedbacks />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

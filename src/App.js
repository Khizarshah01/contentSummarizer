import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Donate from './components/Donate';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />        
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;


import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <div >
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

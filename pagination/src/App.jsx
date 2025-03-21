import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Component/Page/Product';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Page/Home';
import Contact from './Component/Page/Contact';
import About from './Component/Page/About';
import { ThemeProvider } from './Context/themeContext'; // Correct import

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

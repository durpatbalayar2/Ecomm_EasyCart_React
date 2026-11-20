
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <footer className="bg-slate-900 text-slate-300 text-center py-6 px-4 text-sm">
        © 2026 EasyCart | Built with React + Tailwind CSS 
      </footer>
    </div>
  );
}

export default App;

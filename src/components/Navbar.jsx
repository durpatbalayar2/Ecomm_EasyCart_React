import { useContext } from "react";

import { ShopContext } from "../context/ShopContext.jsx";
import { NavLink } from "react-router";

export default function Navbar() {
  const { cart } = useContext(ShopContext);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Easy<span className="text-teal-600">Cart</span><span className="text-teal-600">.</span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-3 sm:gap-7 text-sm sm:text-base font-medium text-slate-600">
          <NavLink to="/" className="hover:text-teal-700">Home</NavLink>
          <NavLink to="/products" className="hover:text-teal-700">Products</NavLink>
          <NavLink to="/about" className="hover:text-teal-700">About</NavLink>
          <NavLink
            to="/cart"
            className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Cart ({cart.length})
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

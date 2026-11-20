import { useContext } from "react";
import { ShopContext } from "../context/ShopContext.jsx";

// We receive the product from Home.jsx or Products.jsx using props.
export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(ShopContext);
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <div className="bg-slate-100 h-52 flex items-center justify-center p-5">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-teal-700 mb-2">
          {product.category}
        </p>
        <h3 className="font-bold text-slate-900 line-clamp-2 min-h-12">{product.title}</h3>
        <p className="text-xl font-extrabold text-slate-900 mt-3">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          disabled={isInCart}
          className={`mt-auto pt-2 w-full rounded-lg py-3 font-semibold transition-colors ${
            isInCart
              ? "bg-teal-100 text-teal-700 cursor-default"
              : "bg-slate-900 text-white hover:bg-teal-700 cursor-pointer"
          }`}
        >
          {isInCart ? "Added to Cart ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

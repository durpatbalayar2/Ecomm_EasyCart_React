import { useContext } from "react";
import { Link } from "react-router";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Home() {
  const { products, loading, error } = useContext(ShopContext);

  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <span className="inline-block bg-teal-500/20 text-teal-200 px-3 py-1 rounded-full text-sm font-medium mb-6">
              Discover something new
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Shopping made <span className="text-teal-400">simple.</span>
            </h1>
            <p className="mt-5 text-slate-300 text-lg max-w-lg leading-relaxed">
              Explore a collection of everyday favorites. Great products, easy browsing, and a simple shopping cart.
            </p>
            <Link
              to="/products"
              className="inline-block mt-8 bg-teal-500 text-slate-950 px-7 py-3 rounded-lg font-bold hover:bg-teal-400"
            >
              Explore Products →
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-700 p-10 shadow-xl text-center">
              <div className="text-8xl my-7" aria-hidden="true">🛍️</div>
              <div className="bg-white/20 rounded-xl py-3 font-bold tracking-wide">Find • Add • Enjoy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center justify-between gap-4 mb-7">
          <div>
            <p className="text-teal-700 text-sm font-semibold uppercase">Popular picks</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Featured Products</h2>
          </div>
          <Link to="/products" className="text-teal-700 font-bold hover:underline whitespace-nowrap">View all →</Link>
        </div>
        {loading && <p className="text-slate-600">Loading products...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

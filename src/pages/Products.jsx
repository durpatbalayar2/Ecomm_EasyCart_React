import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductCard from "../components/ProductCard.jsx";

export default function Products() {
  const { products, loading, error } = useContext(ShopContext);
  const [search, setSearch] = useState("");

  // Search 
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 min-h-[70vh]">
      <div className="sm:flex sm:items-end sm:justify-between gap-6 mb-8">
        <div>
          <p className="text-teal-700 font-semibold mb-2">Browse our store</p>
          <h1 className="text-4xl font-extrabold text-slate-900">All Products</h1>
          <p className="text-slate-500 mt-2">Find something you love.</p>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="mt-5 sm:mt-0 w-full sm:w-80 px-4 py-3 border border-slate-300 bg-white rounded-xl outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      {loading && <p className="text-slate-600">Loading products...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && (
        <>
          <p className="text-sm text-slate-500 mb-6">Showing {filteredProducts.length} products</p>
          {filteredProducts.length === 0 ? (
            <p className="text-slate-600 py-10">No products match your search.</p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

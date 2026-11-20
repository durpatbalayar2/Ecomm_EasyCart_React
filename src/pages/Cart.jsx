import { useContext } from "react";

import { ShopContext } from "../context/ShopContext.jsx";

import { Link ,NavLink} from "react-router";

export default function Cart() {
  const { cart, removeFromCart } = useContext(ShopContext);
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <main className="max-w-5xl mx-auto px-4 py-12 min-h-[70vh]">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Your Cart</h1>
      <p className="text-slate-500 mb-8">Review the products you added.</p>

      {cart.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-slate-800">
            Your cart is empty
          </h2>
          <p className="text-slate-500 mt-2">Start exploring our products.</p>
          <NavLink
            to="/products"
            className="inline-block mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-700"
          >
            Browse Products
          </NavLink>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-7">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-slate-200 p-4 flex gap-4 items-center"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-20 w-20 object-contain bg-slate-100 rounded-lg"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-slate-900">{product.title}</h2>
                  <p className="text-teal-700 font-extrabold mt-1">
                    ${product.price}
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-600 font-semibold hover:underline text-sm cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 h-fit">
            <h2 className="text-xl font-bold text-slate-900">Order Summary</h2>
            <div className="flex justify-between text-slate-600 mt-6">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>
            <div className="border-t border-slate-200 mt-5 pt-5 flex justify-between font-extrabold text-xl">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-slate-500 mt-5">
              Demo only. Checkout is not implemented.
            </p>
            <Link
              to="/products"
              className="block text-center mt-6 bg-teal-600 text-white rounded-lg py-3 font-bold hover:bg-teal-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

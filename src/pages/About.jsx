import { Link } from "react-router";
function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-14 min-h-[70vh]">
      <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-12 shadow-sm">
        <p className="text-teal-700 font-semibold mb-2">A little about us</p>
        <h1 className="text-4xl font-extrabold text-slate-900">
          About EasyCart
        </h1>
        <p className="mt-6 text-slate-600 leading-8">
          EasyCart is a beginner-friendly React e-commerce project. Here you can
          browse products, search by name, and add products to your shopping
          cart.
        </p>
        <p className="mt-4 text-slate-600 leading-8">
          It is built with React, React Router, Context API, useState,
          useEffect, Fetch API, and Tailwind CSS. Product data comes from the
          free DummyJSON API.
        </p>

        <Link
          to="/products"
          className="inline-block mt-8 bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700"
        >
          Shop Products →
        </Link>
      </div>
    </main>
  );
}

export default About;

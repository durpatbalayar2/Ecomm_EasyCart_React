
import { createContext, useEffect, useState } from "react";

// Create Context
export const ShopContext = createContext();

// Create Provider
export function ShopProvider({ children }) {

  // Products state
  const [products, setProducts] = useState([]);

  // Get cart data from localStorage
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products when the website loads
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=20"
        );

        if (!response.ok) {
          throw new Error("Failed to load products");
        }

        const data = await response.json();
        setProducts(data.products);

      } catch (err) {
        setError("Could not load products. Please try again later.");

      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Add product to cart
  function addToCart(product) {
    const alreadyAdded = cart.some(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setCart([...cart, product]);
    }
  }

  // Remove product from cart
  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        loading,
        error,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

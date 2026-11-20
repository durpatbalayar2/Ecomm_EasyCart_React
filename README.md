# EasyCart React E-commerce Website

EasyCart is a simple, responsive e-commerce website built with **React, React Router, Context API, Fetch API, and Tailwind CSS**. This project is designed to practice basic React concepts without adding advanced features.

## Pages

| Page | What it does |
| --- | --- |
| **Home** | Displays a hero section and 4 featured products. |
| **Products** | Fetches 20 products from DummyJSON, displays product cards, and lets users search. |
| **About** | Provides a short introduction to the project. |
| **Cart** | Lets users view, add, and remove products and see the total price. |

**New feature:** Cart products are saved in the browser using `localStorage`, so they remain in the cart after a page refresh.

## React concepts used

- **`useState`** — stores the products, cart, search input, loading status, and error message.
- **`useEffect`** — fetches products when the app loads, and saves the cart when it changes.
- **Fetch API** with `async/await` and `response.json()` — receives product data from a public API.
- **Context API** (`createContext`, `useContext`, Provider) — shares products and cart data between pages without props drilling.
- **React Router** (`BrowserRouter`, `Routes`, `Route`, `Link`) — navigates between the four pages without full-page reloads.
- **Props** — passes product details to the reusable `ProductCard` component.
- **JavaScript array methods** — `map()`, `filter()`, `slice()`, `some()`, and `reduce()`.
- **`localStorage`** — keeps cart data after refreshing or reopening the website in the same browser.
- **Tailwind CSS v4** — styles the layout, buttons, navigation, and product cards.

**Not used:** Redux, `useReducer`, `useMemo`, custom hooks, `useParams`, backend, login, or payment integration.

## Project folder structure

```text
src/
├── main.jsx                    # BrowserRouter and ShopProvider
├── App.jsx                     # Routes for four pages
├── index.css                   # Tailwind CSS import
├── context/
│   └── ShopContext.jsx         # Fetch API, Context API, cart, localStorage
├── components/
│   ├── Navbar.jsx              # Navigation links and cart count
│   └── ProductCard.jsx         # Reusable product card using props
└── pages/
    ├── Home.jsx                # Featured products
    ├── Products.jsx            # Products list and search
    ├── About.jsx               # About the store
    └── Cart.jsx                # Cart items and total
```

## How to run the project

### Option 1: Run the downloaded project

Open a terminal inside the extracted `react-ecommerce-simple` folder and run:

```bash
npm install
npm run dev
```

### Option 2: Add it to your existing Vite project

1. Back up your current `src/` folder in `react_ecomm`.
2. Copy the downloaded `src/` folder into `react_ecomm`.
3. Copy the downloaded `vite.config.js` into `react_ecomm`.
4. Run these commands from your project folder:

```bash
npm install react-router-dom
npm install -D tailwindcss @tailwindcss/vite
npm run dev
```

The project uses **Tailwind CSS v4**: `src/index.css` contains `@import "tailwindcss";`, and Tailwind is set up in `vite.config.js`. No `tailwind.config.js` file is required for this setup.

## How the project works

1. `main.jsx` wraps the application in `BrowserRouter` and `ShopProvider`.
2. `ShopContext.jsx` uses `useEffect` and `fetch()` to get 20 products from `https://dummyjson.com/products?limit=20`.
3. `App.jsx` provides routes for Home, Products, About, and Cart.
4. `Home.jsx` shows 4 featured products, and `Products.jsx` shows the product list and search.
5. Each `ProductCard.jsx` gets a product using **props**. Clicking **Add to Cart** calls `addToCart()` from Context API.
6. `ShopContext.jsx` updates the cart state; `Cart.jsx` and `Navbar.jsx` display the shared cart data.
7. `useEffect` saves the cart in `localStorage` whenever the cart changes. When the page reloads, the saved cart is read into state.

## How localStorage works in ShopContext.jsx

**Step 1 — Read cart data when the app loads:**

```jsx
const [cart, setCart] = useState(
  JSON.parse(localStorage.getItem("cart")) || []
);
```

- `localStorage.getItem("cart")` gets the saved JSON string.
- `JSON.parse()` converts the JSON string back to a JavaScript array.
- `|| []` uses an empty array if nothing has been saved yet.

**Step 2 — Save cart data when it changes:**

```jsx
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
```

- `JSON.stringify()` converts the cart array into a JSON string.
- `localStorage.setItem()` saves it in the browser.
- `[cart]` means the effect runs after the initial render and whenever `cart` changes.

**Step 3 — Add and remove products:**

```jsx
function addToCart(product) {
  const alreadyAdded = cart.some((item) => item.id === product.id);

  if (!alreadyAdded) {
    setCart([...cart, product]);
  }
}

function removeFromCart(id) {
  setCart(cart.filter((item) => item.id !== id));
}
```

You do not need to call `localStorage.setItem()` in these functions. Updating the `cart` state triggers the saving effect automatically.

### Try it yourself

1. Open the **Products** page.
2. Click **Add to Cart** for any product.
3. Open the **Cart** page and check the item.
4. Refresh the page. The item should still be there.
5. Remove the product and refresh again. The item should stay removed.

You can inspect the saved data in Chrome DevTools → **Application** → **Local Storage** → your website's origin → `cart`.

## How to explain the project in an interview

> "EasyCart is a beginner React e-commerce project styled with Tailwind CSS. I used React Router for navigation between Home, Products, About, and Cart. I used `useEffect` and the Fetch API to load product data from DummyJSON. I used Context API to share products and cart data across components, and props to pass each product to a reusable ProductCard. I used `localStorage` to save the cart, so products stay in the cart after refreshing the page."

## Important notes

- This is a **learning project**, not a real shopping website.
- The products come from the public DummyJSON demo API.
- The cart allows **one of each product**, and does not include quantity controls.
- Cart data is stored **only in the current browser's localStorage**; it is not synced across browsers or devices.
- There is **no login, backend, checkout, or payment**.
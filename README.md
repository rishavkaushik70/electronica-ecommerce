# Electronica

A modern, responsive electronics e-commerce web application built with **React 19**, **Redux Toolkit**, **Tailwind CSS v4**, **React Router v7**, and **Clerk** authentication.

**Live Demo:** [https://electro-nica.netlify.app/](https://electro-nica.netlify.app/)

---

## Overview

**Electronica** is a frontend e-commerce storefront designed to deliver a smooth, real-world online electronics shopping experience. It fetches multi-category electronics catalog data from external APIs, manages global product and cart state with Redux Toolkit, protects checkout routes with Clerk authentication, and provides automatic user location detection via browser geolocation and OpenStreetMap reverse geocoding.

### Engineering Highlights

- **Modular Architecture:** Clear separation of concerns across `pages/`, `components/`, `hooks/`, `services/`, and `store/`.
- **Centralized State Management:** Async catalog fetching (`createAsyncThunk`) and cart mutations handled predictably with Redux Toolkit.
- **Responsive Design:** Desktop and mobile-first layouts featuring adaptive navigation (`ResponsiveMenu`) and dedicated mobile filtering (`MobileFilter`).
- **Protected Routes & Auth:** Seamless sign-in and user session management powered by Clerk (`@clerk/clerk-react`).

---

## Key Features

- **Dynamic Product Catalog:** Concurrent multi-category fetching from the [DummyJSON Products API](https://dummyjson.com/) (`smartphones`, `laptops`, `tablets`, `mobile-accessories`, `charger`, `electric fan`, `battery`, `earphone`, `speaker`, `smart-watch`, `Audio`).
- **Interactive Hero Carousel:** Auto-playing Swiper slider showcasing featured products with direct navigation to product detail pages.
- **Advanced Search & Filtering:** Real-time title search, category filtering, brand selection, price range slider (`₹0 – ₹5,000`), one-click filter reset, and client-side pagination (8 items per page).
- **Product Detail & Category Views:** Dedicated single-product pages with breadcrumbs, discount pricing calculation, descriptions, and category-specific list views.
- **Shopping Cart & Billing Summary:** Add/remove items, increment/decrement quantities, real-time item totals, delivery & handling fee breakdown, and instant toast feedback via `react-toastify`.
- **Authentication & Route Protection:** Clerk-powered Sign In / User Profile controls in the navbar and a `ProtectedRoute` wrapper guarding `/cart`.
- **Geolocation Detection:** Custom `useLocation` hook using `navigator.geolocation` and the [OpenStreetMap Nominatim API](https://nominatim.openstreetmap.org/) to auto-populate county, state, and country in the navbar and delivery form.
- **SPA Deployment Ready:** Includes `public/_redirects` for seamless client-side routing on Netlify.

---

## Tech Stack

| Layer | Technologies |
| --- | --- |
| **Frontend** | React 19, Vite 8, Tailwind CSS v4 |
| **State Management** | Redux Toolkit, React Redux |
| **Routing** | React Router DOM v7 (`createBrowserRouter`) |
| **Authentication** | Clerk (`@clerk/clerk-react`) |
| **UI & Interactions** | Swiper, Framer Motion, Lucide React, React Icons, React Toastify, React Scroll To Top |
| **External APIs** | DummyJSON Products API, OpenStreetMap Nominatim Reverse Geocoding API |
| **Tooling** | ESLint |

---

## Application Routes

| Route | Page | Access | Description |
| --- | --- | --- | --- |
| `/` | `Home` | Public | Hero product carousel, categories, promotional banner, and store highlights |
| `/products` | `Products` | Public | Full catalog with search, category/brand/price filters, and pagination |
| `/products/:id` | `SingleProduct` | Public | Product details, pricing breakdown, and Add to Cart action |
| `/category/:category` | `CategoryProduct` | Public | Filtered list view for a selected product category |
| `/cart` | `Cart` | Protected | Cart management, delivery address auto-detection, and order summary |
| `/about` | `About` | Public | Brand and store overview |
| `/contact` | `Contact` | Public | Contact page |

---

## Project Structure

```text
electronica-ecommerce/
├── public/
│   └── _redirects               # Netlify SPA fallback routing rule
├── src/
│   ├── assets/                  # Images, banners, and loading media
│   ├── components/              # Reusable UI components (Navbar, Carousel, Filters, Cards, etc.)
│   ├── hooks/
│   │   └── useLocation.js       # Custom hook for browser geolocation state
│   ├── pages/                   # Route-level pages (Home, Products, SingleProduct, Cart, etc.)
│   ├── services/
│   │   ├── locationService.js   # Geolocation & Nominatim reverse geocoding service
│   │   └── productService.js    # DummyJSON multi-category API integration
│   ├── store/
│   │   ├── cartProductSlice.js  # Cart state & quantity reducers
│   │   ├── productSlice.js      # Async product thunk & catalog state
│   │   └── store.js             # Redux store configuration
│   ├── App.jsx                  # Root layout with Navbar, Outlet, Footer, Toasts & ScrollToTop
│   ├── index.css                # Global & Tailwind CSS styles
│   └── main.jsx                 # Router, ClerkProvider, and Redux Provider setup
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm**
- A **Clerk** account to obtain a Publishable Key

### Installation & Local Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rishavkaushik70/electronica-ecommerce.git
   cd electronica-ecommerce
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the project root and add your Clerk publishable key:

   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open the local URL printed in your terminal (typically `http://localhost:5173`).

---

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with HMR |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint across the project |

---

## Future Improvements

- Persistent cart storage via `localStorage` or a backend database
- Payment gateway integration (e.g., Stripe or Razorpay)
- Order history and order tracking dashboard
- Product ratings, user reviews, and wishlist support
- Dynamic sorting options (price low-to-high, popularity, discount)

---

## Author

**Rishabh Kaushik**  
GitHub: [@rishavkaushik70](https://github.com/rishavkaushik70)

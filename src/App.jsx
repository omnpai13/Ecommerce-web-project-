import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

/* CUSTOMER PAGES */
import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetails from "./pages/Productdetails";
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* ADMIN */
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import AdminProducts from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import Orders from "./admin/pages/Orders";
import Reviews from "./admin/pages/Reviews";
import HomeControl from "./admin/pages/HomeControl";

import AdminLayout from "./admin/components/AdminLayout";
import ProtectedAdminRoute from "./admin/routes/ProtectedAdminRoute";

/* ---------- LAYOUT ---------- */
function AppLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {/* WEBSITE HEADER ONLY */}
      {!isAdminRoute && <Header />}

      <Routes>
        {/* ---------------- CUSTOMER ROUTES ---------------- */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ---------------- ADMIN LOGIN ---------------- */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ---------------- ADMIN PANEL ---------------- */}
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <AdminLayout />
            </ProtectedAdminRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="home-control" element={<HomeControl />} />
        </Route>
      </Routes>

      {/* WEBSITE FOOTER ONLY */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

/* ---------- ROOT ---------- */
export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetails from "./pages/Productdetails";
<<<<<<< HEAD
=======
import Cart from "./pages/Cart";
import Favourites from "./pages/Favourites";
import Checkout from "./pages/Checkout";
>>>>>>> 13666389d4ec793f1bada16b3cd1dc329f062095
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import AdminProducts from "./admin/pages/Products";
import ProtectedAdminRoute from "./admin/routes/ProtectedAdminRoute";

function App() {
  return (
    <BrowserRouter>
      
      {/* HEADER ALWAYS VISIBLE */}
      <Header />

      <Routes>
<<<<<<< HEAD
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Productdetails />} /> {/* <-- dynamic route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <Dashboard />
            </ProtectedAdminRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedAdminRoute>
              <AdminProducts />
            </ProtectedAdminRoute>
          }
        />

=======
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Productdetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
>>>>>>> 13666389d4ec793f1bada16b3cd1dc329f062095
      </Routes>

    </BrowserRouter>
  );
}

export default App;

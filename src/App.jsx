import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Productdetails from "./pages/Productdetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminLogin from "./admin/pages/AdminLogin";
import Dashboard from "./admin/pages/Dashboard";
import AdminProducts from "./admin/pages/Products";
import ProtectedAdminRoute from "./admin/routes/ProtectedAdminRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
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

      </Routes>
    </BrowserRouter>
  );
}

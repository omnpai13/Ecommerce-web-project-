import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded ${
      isActive ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <nav className="space-y-2">
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          Products
        </NavLink>

        <NavLink to="/admin/add-product" className={linkClass}>
          Add Product
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          Orders
        </NavLink>

        <NavLink to="/admin/reviews" className={linkClass}>
          Reviews
        </NavLink>

        <NavLink to="/admin/home-control" className={linkClass}>
          Home Control
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;

import { Link, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <aside className="w-64 h-screen border-r p-6">
      <h2 className="text-lg font-medium mb-8">Admin</h2>

      <nav className="space-y-4">
        <Link to="/admin/dashboard" className="block">
          Dashboard
        </Link>

        <Link to="/admin/products" className="block">
          Products
        </Link>

        <button
          onClick={logout}
          className="text-left text-red-500 mt-8"
        >
          Logout
        </button>
      </nav>
    </aside>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // DEV MODE ADMIN LOGIN (LOGIC ONLY)
    if (username === "admin@dev.com" && password === "admin123") {
      localStorage.setItem(
        "user",
        JSON.stringify({ username, isAdmin: true })
      );
      localStorage.setItem("token", "dev-token");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow rounded w-96"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Admin Login
        </h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

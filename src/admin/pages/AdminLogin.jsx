import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../services/adminApi";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const token = await adminLogin({ email, password });
//       localStorage.setItem("adminToken", token);
//       navigate("/admin/dashboard");
//     } catch {
//       alert("Invalid credentials");
//     }
//   };
    const handleLogin = () => {
        // TEMPORARY: frontend-only login
        localStorage.setItem("adminToken", "dev-token");
        navigate("/admin/dashboard");
    };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-96 bg-white border p-8">
        <h1 className="text-xl font-medium mb-6">Admin Login</h1>

        <input
          className="w-full border p-2 mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-6"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
}

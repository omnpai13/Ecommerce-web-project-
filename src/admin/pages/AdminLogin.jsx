const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow rounded w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">Admin Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-2 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-black text-white py-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;

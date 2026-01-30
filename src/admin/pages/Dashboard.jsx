import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5003/api/admin/stats")
      .then((res) => {
        if (!res.ok) throw new Error("Backend not reachable");
        return res.json();
      })
      .then((data) => {
        setStats(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setStats(null);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading dashboard...</p>;
  if (!stats) return <p>Backend not reachable</p>;

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <p>Overview of admin activity.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Products</p>
          <h2 className="text-2xl font-bold">{stats.products}</h2>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Orders</p>
          <h2 className="text-2xl font-bold">{stats.orders}</h2>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Users</p>
          <h2 className="text-2xl font-bold">{stats.users}</h2>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">₹{stats.revenue}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

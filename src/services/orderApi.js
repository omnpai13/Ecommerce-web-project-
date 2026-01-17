const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getOrders = async () => {
  const res = await fetch(`${API}/orders`);
  return res.json();
};

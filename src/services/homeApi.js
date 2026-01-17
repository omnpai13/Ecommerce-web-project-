const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getHomeData = async () => {
  const res = await fetch(`${API}/home`);
  return res.json();
};

export const updateHomeData = async (data) => {
  const res = await fetch(`${API}/home`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

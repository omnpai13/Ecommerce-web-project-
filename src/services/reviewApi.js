const API = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export const getReviews = async () => {
  const res = await fetch(`${API}/reviews`);
  return res.json();
};

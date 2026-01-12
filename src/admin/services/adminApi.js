const BASE_URL = "http://localhost:5000/api"; // confirm with backend dev

export const adminLogin = async (credentials) => {
  const res = await fetch(`${BASE_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error("Login failed");

  const data = await res.json();
  return data.token;
};

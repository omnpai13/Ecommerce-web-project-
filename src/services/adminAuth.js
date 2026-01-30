import api from "./api";

export const adminLogin = async ({ email, password }) => {
  const res = await api.post("/api/auth/login", {
    email,
    password,
  });

  return res.data; // { token, user }
};

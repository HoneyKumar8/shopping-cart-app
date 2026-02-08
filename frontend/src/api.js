import axios from "axios";

const api = axios.create({
  baseURL: "https://shopping-cart-backend.onrender.com",
});

// Attach token automatically
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export default api;

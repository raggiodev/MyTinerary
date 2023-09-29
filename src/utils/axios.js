import axios from "axios";

export const server = axios.create({
  // baseURL: "http://localhost:5000/api"
  baseURL: import.meta.env.VITE_API_URL,
});
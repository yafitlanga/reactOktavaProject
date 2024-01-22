import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44312/api/",

  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
//https://localhost:44312/api/Users

import axios from "axios";

const token = typeof window !== "undefined" && localStorage.getItem("token");

export const http = axios.create({
  baseURL: "https://api.moliyaviytahlil.uz/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

import axios from "axios";

const token = typeof window !== "undefined" && localStorage.getItem("token");
const refresh =
  typeof window !== "undefined" && localStorage.getItem("refresh_token");

export const http = axios.create({
  baseURL: "https://api.moliyaviytahlil.uz/",
  headers: {
    Authorization: "Bearer " + token,
    Cookie: "refresh_token=" + refresh,
  },
});

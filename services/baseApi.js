import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://kalinka.phuket.forsale/",
  timeout: 600000,
});

import axios from "axios";

export const axiosAgent = axios.create({
  baseURL: "https://fakestoreapi.com/", //her url bunun sonuna eklenecek//instance
  headers: {
    "Content-Type": "application/json",
  },
});

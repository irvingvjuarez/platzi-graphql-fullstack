import axios from "axios"

export const requester = axios.create({
  baseURL: "https://api.escuelajs.co",
  headers: {
    "Content-Type": "application/json"
  }
})

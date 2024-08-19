import axios from "axios";

const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

export default baseInstance;
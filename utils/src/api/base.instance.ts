import axios from "axios";
import * as process from 'process';

const baseInstance = axios.create({
  baseURL: process.env.API_URL,
})

export default baseInstance;
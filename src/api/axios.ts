import i18n from "@/i18n";
import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use((config) => {
  const acceptLang = i18n.language === 'kr' ? 'kr' : 'uz';
  config.headers['Accept-Language'] = acceptLang;  
  return config;
});
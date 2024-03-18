import axios from 'axios';
   const defaultUrl ="http://192.168.1.74:8080";
export const axiosPrivate = axios.create({
    baseURL:defaultUrl,
});
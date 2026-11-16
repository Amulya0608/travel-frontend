import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-backend-nf40.onrender.com/"
});

export default api;

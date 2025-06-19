import axios from "axios";

const url_bilan = "http://localhost:9000/bilans/api/v1";

const axiosInstance = axios.create({
  baseURL: url_bilan,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;

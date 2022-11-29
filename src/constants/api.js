import axios from "axios";

const api = axios.create(
    {
        baseURL: import.meta.env.MAIN_API || 'http://localhost:8080'
    }
)

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });

export default api
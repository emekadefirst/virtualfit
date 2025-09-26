import axios from 'axios';

const API = import.meta.env.VITE_API;

// Create axios instance with base configuration
const apiClient = axios.create({
  baseURL: API.replace(/\/$/, ""),
  timeout: 10000, // 10 second timeout
});

apiClient.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const refreshToken = localStorage.getItem("refresh_token");
      if (refreshToken) {
        try {
          const response = await axios.post(`${API}/users/refresh`, {
            refresh_token: refreshToken
          });
          
          const { access_token, refresh_token: newRefreshToken } = response.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", newRefreshToken);
          
          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          throw new Error("Session expired. Please log in again.");
        }
      }
    }
    
    throw error;
  }
);

export default async function apiCall(path, method = "GET", body = null) {
    console.log(API)
  try {
    const config = {
      method,
      url: path.replace(/^\//, ""),
    };

    // Handle different body types
    if (body) {
      if (body instanceof FormData) {
        config.data = body;
      } else {
        config.data = body;
      }
    }

    const response = await apiClient(config);
    
    return {
      data: response.data,
      status: response.status
    };
  } catch (error) {
    console.error("API call failed:", error);
    
    // Handle Axios errors
    if (error.response) {
      // Server responded with error status
      const message = error.response.data?.message || `Request failed: ${error.response.status}`;
      throw new Error(message);
    } else if (error.request) {
      // Request was made but no response received
      throw new Error("Network error. Please check your connection.");
    } else {
      // Something else happened
      throw error;
    }
  }
}
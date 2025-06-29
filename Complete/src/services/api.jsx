import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Interceptor to add the token to every outgoing request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('econest_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auth functions
export const login = (credentials) => apiClient.post('/auth/login', credentials);
export const register = (userData) => apiClient.post('/auth/register', userData);
export const getProfile = () => apiClient.get('/auth/profile');

// Other API functions
export const getProducts = () => apiClient.get('/products/');
export const getBrands = () => apiClient.get('/brands/');
export const getCommunityPosts = () => apiClient.get('/community/posts/');

export default apiClient;
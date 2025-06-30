import axios from 'axios';

const API_BASE_URL = 'https://econest-backend-1.onrender.com'; 

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export const login = (credentials) => apiClient.post('/api/auth/login', credentials);
export const register = (userData) => apiClient.post('/api/auth/register', userData);
export const getProfile = () => apiClient.get('/api/auth/profile');

export const getProducts = () => apiClient.get('/api/products/');
export const getBrands = () => apiClient.get('/api/brands/');

export const getCommunityPosts = () => apiClient.get('/api/community/posts/');
export const createCommunityPost = (postData) => apiClient.post('/api/community/posts/', postData);

export const getFeaturedProducts = () => apiClient.get('/api/home/featured-products');
export const getLatestPosts = () => apiClient.get('/api/home/latest-posts');

export default apiClient;
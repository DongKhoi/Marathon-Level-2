// services/apiService.js
// npm install axios
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const apiService = {
  fetchPosts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },
};

export default apiService;

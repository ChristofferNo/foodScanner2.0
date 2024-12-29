import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

const apiService = {
  get: async (endpoint, payload) => {
    try {
      const response = await axios.get(`${API_BASE_URL}${endpoint}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  post: async (endpoint, payload) => {
    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`);
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

export default apiService;

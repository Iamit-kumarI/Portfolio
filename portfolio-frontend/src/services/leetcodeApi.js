import axios from "axios";

const BASE_URL = "https://portfolio-backend-ogn1.onrender.com";

export const fetchLeetCodeData = async () => {
  const response = await axios.get(`${BASE_URL}/LeetCode`);
  return response.data;
};

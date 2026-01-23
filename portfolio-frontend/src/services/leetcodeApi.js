import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchLeetCodeData = async () => {
  const response = await axios.get(`${BASE_URL}/LeetCode`);
  return response.data;
};

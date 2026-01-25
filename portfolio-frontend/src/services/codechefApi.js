import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const fetchCodeChefData = async () => {
  const response = await axios.get(`${BASE_URL}/CodeChef`);
  return response.data;
};

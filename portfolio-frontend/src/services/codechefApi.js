import axios from "axios";

const BASE_URL = "https://portfolio-backend-ogn1.onrender.com";

export const fetchCodeChefData = async () => {
  const response = await axios.get(`${BASE_URL}/CodeChef`);
  return response.data;
};

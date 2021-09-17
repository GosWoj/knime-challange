import axios from "axios";

const baseURL = "http://localhost:3001/nodes";

const getAll = async () => {
  const response = await axios.get(baseURL);

  return response.data;
};

const nodeService = {
  getAll,
};

export default nodeService;

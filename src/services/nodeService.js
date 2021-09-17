import axios from "axios";

const baseURL = "http://localhost:3001/nodes";

const getAll = async () => {
  const response = await axios.get(baseURL);

  return response.data;
};

const addNode = async (node) => {
  const response = await axios.post(baseURL, node);

  return response.data;
};

const removeNode = async (id) => {
  const response = await axios.delete(`${baseURL}/${id}`);

  return response.data;
};

const nodeService = {
  getAll,
  addNode,
  removeNode,
};

export default nodeService;

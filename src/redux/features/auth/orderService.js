import axios from "axios";

const BACKEND_URL = 'http://localhost:5000';
export const API_URL = `${BACKEND_URL}/api/order/`;

//   create order
const createOrder = async (orderData) => {
  const response = await axios.post(API_URL + "create", orderData);
  return response.data;
};

//   get order
const getOrder = async () => {
  const response = await axios.get(API_URL + "getOrder");
  return response.data;
};

// Get Users
const getOrders = async () => {
  const response = await axios.get(API_URL + "getOrders");

  return response.data;
};


// Delete Order
const deleteOrder = async (id) => {
  const response = await axios.delete(API_URL + id);

  return response.data.message;
};

// Upgrade Order
const upgradeOrder = async (orderData) => {
  const response = await axios.post(API_URL + "upgradeOrder", orderData);

  return response.data.message;
};

// Update order
const updateOrder = async (orderData) => {
  const response = await axios.patch(API_URL + "updateOrder", orderData);
  return response.data;
};




const orderService = {
    createOrder,
    getOrder,
    getOrders,
    upgradeOrder,
    deleteOrder,
    updateOrder,
};

export default orderService;
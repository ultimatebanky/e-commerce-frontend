import axios from "axios";

const BACKEND_URL = 'https://e-commerce-backend-e4p8.onrender.com';
const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
const sendAutomatedEmail = async (emailData) => {
  const response = await axios.post(API_URL + "sendAutomatedEmail", emailData);
  return response.data.message;
};

const emailService = {
  sendAutomatedEmail,
};

export default emailService;

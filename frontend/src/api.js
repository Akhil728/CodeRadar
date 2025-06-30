import axios from 'axios';

// Configure axios with the correct base URL
// Get the base URL from environment or use a default for development
const apiBaseURL = process.env.REACT_APP_API_URL || 'http://localhost:8000';
axios.defaults.baseURL = apiBaseURL;

export default axios;

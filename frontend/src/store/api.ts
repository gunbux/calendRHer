import axios from 'axios';

export default axios.create({
  baseURL: `https://calenrher-backend.herokuapp.com/`,
  validateStatus: (status) => {
    return status >= 200 && status < 400;
  }
});
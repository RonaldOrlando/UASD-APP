import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://uasdapi.ia3x.com/', // Base URL de la API
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3OCIsIm5iZiI6MTczMzE4NzU3MSwiZXhwIjoxNzMzMTkxMTcxLCJpYXQiOjE3MzMxODc1NzF9.cujF4JsYXCmMRRn7QP8YA3vBF3XUIiWUa1B077L9juU',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;

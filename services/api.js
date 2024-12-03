import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

// URL base de la API
const API_URL = 'https://uasdapi.ia3x.com';

// Función para obtener el token desde el almacenamiento seguro
const getToken = async () => {
  return await SecureStore.getItemAsync('userToken');
};

// Función para hacer solicitudes GET autenticadas
const get = async (endpoint) => {
  const token = await getToken();

  if (!token) {
    throw new Error('No token found, user is not authenticated');
  }

  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from API: ' + error.message);
  }
};

// Función para hacer solicitudes POST autenticadas
const post = async (endpoint, data) => {
  const token = await getToken();

  if (!token) {
    throw new Error('No token found, user is not authenticated');
  }

  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to post data to API: ' + error.message);
  }
};

// **Nueva función** para hacer solicitudes POST sin autenticación
const postWithoutAuth = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json', // Encabezado estándar para JSON
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to post data to API: ' + error.message);
  }
};

// Exportamos las funciones
export default {
  get,
  post,
  postWithoutAuth, // Exportamos esta nueva función
};

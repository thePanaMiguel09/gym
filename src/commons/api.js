import axios from "axios";

const publicKey = "HslhHeWjOGLgkpPD4mtNlQ==A4rDDiRfK7a3uAb6";

const axiosInstance = axios.create({
  baseURL: "https://api.api-ninjas.com/v1/exercises",
  timeout: 10000,
  headers: {
    "X-Api-Key": publicKey,
  },
});

export const api = {
  get: async (muscle) => {
    try {
      const params = { muscle };
      const response = await axiosInstance.get("", { params });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },
};

const handleError = (error) => {
 
  if (error.response) {
    console.error("Error en la respuesta de la API", error.response);
  } else if (error.request) {
    console.error(
      "La solicitud fue hecha pero no hubo respuesta",
      error.request
    );
  } else {
    console.error("Error al configurar la solicitud", error.message);
  }
  throw error;
};

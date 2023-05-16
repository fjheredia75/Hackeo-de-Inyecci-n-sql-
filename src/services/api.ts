import axios from "axios";

export async function login(username: string, password: string): Promise<string> {
  try {
    const response = await axios.post(
      "URL_DEL_ENDPOINT_DEL_LABORATORIO",
      {
        username,
        password,
      }
    );
    // Aquí debes procesar la respuesta de la API según la estructura de datos que recibas.
    // Si la respuesta indica que el inicio de sesión fue exitoso, devuelve "HACKED",
    // de lo contrario, devuelve "FAILED".
    // Puedes adaptar el código según la estructura de la respuesta real de la API.
    if (response.data.success) {
      return "HACKED";
    } else {
      return "FAILED";
    }
  } catch (error) {
    console.error("Error during login:", error);
    return "FAILED";
  }
}
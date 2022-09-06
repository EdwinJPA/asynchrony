// Importamos fetch para hacer las peticiones al servidor
import fetch from "node-fetch";
// URI de la API
const API = "https://api.escuelajs.co/api/v1";

// Función que trae datos de una API en una URL específica
function fetchData(urlApi) {
  return fetch(urlApi);
}

// Se genera una petición a la API con su endpoint productos
fetchData(`${API}/products`)
  // Se convierte la información recibida a JSON, proceso asíncrono, se retorna una promesa "then"
  .then((productos) => productos.json())
  // Se recibe el JSON y se retorna otra petición que nos devuelve una promesa "FETCH"
  .then((response) => {
    return fetchData(`${API}/products/${response[0].id}`);
  })
  // Se convierte a JSON
  .then(response => response.json())
  // Se hace otra petición
  .then((categoria) => fetchData(`${API}/categories/${categoria?.category?.id}`))
  // Se convierte a JSON
  .then((response) => response.json())
  // Se muesrta la información en pantalla
  .then((data) => console.log(data.name))
  // Si hay un error se muestra en pantalla
  .catch((error) => console.error(error))
  // Cuando finalice, se muestra un mensaje en pantalla
  .finally(() => console.log("Finalizo"));

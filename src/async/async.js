import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

// Función que trae los datos de la API
async function fechData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

// Función que trae la información de la API
const anotherFunction = async (urlApi) => {
  try {
    const products = await fechData(`${urlApi}/products`);
    const product = await fechData(`${urlApi}/products/${products[0].id}`);
    const category = await fechData(`${urlApi}/categories/${product.category.id}`);
    console.log(products);
    console.log(product.title);
    console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

anotherFunction(API);

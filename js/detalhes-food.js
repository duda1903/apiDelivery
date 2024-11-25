const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/foods";
const detailsDiv = document.getElementById("details");

async function fetchFoodById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Alimento não encontrado");
    }
    const food = await response.json();
    displayFoodDetails(food);
  } catch (error) {
    detailsDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayFoodDetails(food) {
  const name = food.name || "Nome não disponível";
  const price = food.price ? `R$ ${food.price}` : "Preço não disponível";
  const description = food.description || "Descrição não disponível";
  const image = food.image || "https://via.placeholder.com/300";

  detailsDiv.innerHTML = `
    <h2>${name}</h2>
    <img src="${image}" alt="${name}" />
    <p><strong>Preço:</strong> ${price}</p>
    <p>${description}</p>
  `;
}

function getFoodIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const foodId = getFoodIdFromUrl();
if (foodId) {
  fetchFoodById(foodId);
} else {
  detailsDiv.innerHTML = "<p>ID da comida não encontrado na URL.</p>";
}

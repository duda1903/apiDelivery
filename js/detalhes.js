const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/restaurants";
const detailsDiv = document.getElementById("details");

async function fetchRestaurantById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Restaurante não encontrado");
    }
    const restaurant = await response.json();
    displayRestaurantDetails(restaurant);
  } catch (error) {
    detailsDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayRestaurantDetails(restaurant) {
  const name = restaurant.name || "Nome não disponível";
  const rating = restaurant.rating || "Avaliação não disponível";
  const description = restaurant.description || "Descrição não disponível";
  const image = restaurant.image || "https://via.placeholder.com/300";

  detailsDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Avaliação:</strong> ${rating}</p>
    <p>${description}</p>
    <img src="${image}" alt="${name}" />
  `;
}

function getRestaurantIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const restaurantId = getRestaurantIdFromUrl();
if (restaurantId) {
  fetchRestaurantById(restaurantId);
} else {
  detailsDiv.innerHTML = "<p>ID do restaurante não encontrado na URL.</p>";
}

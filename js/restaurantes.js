const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/restaurants";
const restaurantList = document.getElementById("restaurant-list");

async function fetchRestaurants() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const restaurants = await response.json();
    displayRestaurants(restaurants);
  } catch (error) {
    restaurantList.innerHTML = "<li>Erro ao carregar os restaurantes.</li>";
  }
}

function displayRestaurants(restaurants) {
  restaurantList.innerHTML = "";
  restaurants.forEach((restaurant) => {
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "flex-start";
    listItem.style.marginBottom = "20px";
    listItem.style.cursor = "pointer";

    const name = restaurant.name || "Nome não disponível";
    const rating = restaurant.rating || "Avaliação não disponível";
    const description = restaurant.description || "Descrição não disponível";
    const image = restaurant.image || "https://via.placeholder.com/150";

    listItem.innerHTML = `
      <img src="${image}" alt="${name}" style="width: 100px; height: 100px; border-radius: 8px; margin-right: 15px;" />
      <div>
        <h3>${name}</h3>
        <p><strong>Avaliação:</strong> ${rating}</p>
        <p>${description}</p>
      </div>
    `;

    listItem.addEventListener("click", () => {
        window.location.href = `../detalhes.html?id=${restaurant.id}`;
      });      

    restaurantList.appendChild(listItem);
  });
}

fetchRestaurants();

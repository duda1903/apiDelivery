const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/foods";
const foodList = document.getElementById("food-list");

async function fetchFoods() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const foods = await response.json();
    displayFoods(foods);
  } catch (error) {
    foodList.innerHTML = "<li>Erro ao carregar as comidas.</li>";
  }
}

function displayFoods(foods) {
  foodList.innerHTML = "";
  foods.forEach((food) => {
    const listItem = document.createElement("li");
    listItem.style.display = "flex";
    listItem.style.alignItems = "flex-start";
    listItem.style.marginBottom = "20px";

    const name = food.name || "Nome não disponível";
    const price = food.price ? `R$ ${food.price}` : "Preço não disponível";
    const description = food.description || "Descrição não disponível";
    const image = food.image || "https://via.placeholder.com/150";

    listItem.innerHTML = `
      <img src="${image}" alt="${name}" style="width: 100px; height: 100px; border-radius: 8px; margin-right: 15px;" />
      <div>
        <h3>${name}</h3>
        <p><strong>Preço:</strong> ${price}</p>
        <p>${description}</p>
      </div>
    `;

    listItem.addEventListener("click", () => {
      window.location.href = `../detalhes-comida.html?id=${food.id}`;
    });

    foodList.appendChild(listItem);
  });
}

fetchFoods();

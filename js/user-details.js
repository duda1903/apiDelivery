const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/users";
const detailsDiv = document.getElementById("details");

async function fetchUserById(id) {
  try {
    const response = await fetch(`${apiUrl}/${id}`);
    if (!response.ok) {
      throw new Error("Usuário não encontrado");
    }
    const user = await response.json();
    displayUserDetails(user);
  } catch (error) {
    detailsDiv.innerHTML = `<p>${error.message}</p>`;
  }
}

function displayUserDetails(user) {
  const name = user.name || "Nome não disponível";
  const email = user.email || "Email não disponível";
  const address = user.address || "Endereço não disponível";

  detailsDiv.innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Endereço:</strong> ${address}</p>
  `;
}

function getUserIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

const userId = getUserIdFromUrl();
if (userId) {
  fetchUserById(userId);
} else {
  detailsDiv.innerHTML = "<p>ID do usuário não encontrado na URL.</p>";
}

const apiUrl = "https://apifakedeliverynodejs-main.fly.dev/users";
const userList = document.getElementById("user-list");

async function fetchUsers() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Erro ao buscar usuários: ${response.status}`);
    }
    const users = await response.json();
    displayUsers(users);
  } catch (error) {
    userList.innerHTML = "<li>Erro ao carregar os usuários.</li>";
  }
}

function displayUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");

    const name = user.name || "Nome não disponível";
    const email = user.email || "Email não disponível";

    listItem.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
    `;

    listItem.addEventListener("click", () => {
      window.location.href = `../user-details.html?id=${user.id}`;
    });

    userList.appendChild(listItem);
  });
}

fetchUsers();

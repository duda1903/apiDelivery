document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        window.location.href = "../restaurantes.html";
    });
});

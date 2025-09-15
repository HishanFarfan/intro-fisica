document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-dark");

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    button.textContent = dark ? "☀️ Modo claro" : "🌙 Modo oscuro";
    button.setAttribute("aria-pressed", dark);
  });
});

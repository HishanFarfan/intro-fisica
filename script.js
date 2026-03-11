document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-dark");
  if (!button) return;

  const applyTheme = (dark) => {
    document.body.classList.toggle("dark-mode", dark);
    button.textContent = dark ? "☀️ Modo claro" : "🌙 Modo oscuro";
    button.setAttribute("aria-pressed", String(dark));
  };

  const savedTheme = localStorage.getItem("intro-fisica-theme");
  applyTheme(savedTheme === "dark");

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const dark = document.body.classList.contains("dark-mode");
    localStorage.setItem("intro-fisica-theme", dark ? "dark" : "light");
    applyTheme(dark);
  });
});

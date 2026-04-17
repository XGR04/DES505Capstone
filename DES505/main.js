document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("languageToggle");
  const panel = document.getElementById("languagePanel");

  if (toggle && panel) {
    toggle.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      panel.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
      if (!event.target.closest(".language-menu")) {
        panel.classList.remove("show");
      }
    });
  }
});
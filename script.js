window.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerToggle");
  const sidebar = document.getElementById("mobileSidebar");
  const closeBtn = document.getElementById("closeBtn");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    overlay.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.add("hidden");
  });

  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.add("hidden");
    });
  });
});

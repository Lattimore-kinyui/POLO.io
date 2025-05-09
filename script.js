document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".toggle-button");
  const navbarLinks = document.querySelector(".navbar-links");

  // Add a click event listener to the toggle button
  toggleButton.addEventListener("click", () => {
    // Toggle the 'active' class on the navbar-links
    navbarLinks.classList.toggle("active");
  });
});
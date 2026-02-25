// <script>
const button = document.getElementById("toggleBrands");
const block = document.getElementById("brandsBlock");
button.addEventListener("click", function () {
  if (block.style.display === "none") {
    block.style.display = "block";
    button.textContent = "Скрыть";
  } else {
    block.style.display = "none";
    button.textContent = "Показать все";
  }
});
// swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "gorizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// <script>
const button = document.getElementById("toggleBrands");
const block = document.getElementById("brandsList");
button.addEventListener("click", function () {
  if (block.style.height === "300px") {
    block.style.display = "auto";
    button.innerHTML =
      ' <img class="expand-icon icon-rotate" src="icon/icon.svg" alt="" /> <span class="expand-text ">Скрыть</span>';
  } else {
    block.style.height = "300px";
    button.innerHTML =
      ' <img class="expand-icon" src="icon/icon.svg" alt="" /> <span class="expand-text">Показать все</span>';
  }
});
// swiper
var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

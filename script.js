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

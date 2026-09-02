/* Your JS here. */
console.log('Hello World!')

const card = document.querySelector(".card");
const button = document.querySelector("#theme-toggle");

button.addEventListener("click", function () {
  const isDark = card.classList.toggle("dark");

  if (isDark) {
    button.textContent = "Light";
  } else {
    button.textContent = "Dark";
  }
});
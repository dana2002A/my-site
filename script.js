const button = document.getElementById("magicButton");

button.addEventListener("click", () => {
  const colors = ["#f6d365", "#fda085", "#a1c4fd", "#c2e9fb", "#ff9a9e", "#fad0c4"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = linear-gradient(120deg, ${randomColor}, #fff);

  button.textContent = "Красиво, правда? 🌈";
  setTimeout(() => {
    button.textContent = "Нажми ещё раз 🌸";
  }, 1500);
});
const menuGrid = document.getElementById("menu__grid");

console.log(menuGrid);

new Array(8).fill(null).forEach((_, i) => {
  const card = document.createElement("div");
  card.className = "card";

  const cardFront = document.createElement("img");
  cardFront.className = "card__front";
  cardFront.src = `images/oferta${i + 1}.png`;

  const cardBack = document.createElement("img");
  cardBack.className = "card__back";
  cardBack.src = `images/${i + 1}.png`;

  card.appendChild(cardFront);
  card.appendChild(cardBack);
  menuGrid.appendChild(card);
});

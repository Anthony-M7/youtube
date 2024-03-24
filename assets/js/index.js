let currentCard = 0;
showCard(currentCard);

function showCard(n) {
  const cards = document.querySelectorAll(".card");
  if (n >= cards.length) {
    currentCard = 0;
  } else if (n < 0) {
    currentCard = cards.length - 1;
  } else {
    currentCard = n;
  }
  const displacement = -currentCard * 100;
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${displacement}%)`;
}

function autoChangeCard() {
  showCard(currentCard + 1);
}

setInterval(autoChangeCard, 3000);
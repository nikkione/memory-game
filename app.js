document.addEventListener("DOMContentLoaded", () => {
  // cards array

  const cardArray = [
    {
      name: "one",
      img: "img/frog_one.jpeg",
    },
    {
      name: "one",
      img: "img/frog_one.jpeg",
    },
    {
      name: "two",
      img: "img/frog_two.jpeg",
    },
    {
      name: "two",
      img: "img/frog_two.jpeg",
    },
    {
      name: "three",
      img: "img/frog_three.jpeg",
    },
    {
      name: "three",
      img: "img/frog_three.jpeg",
    },
    {
      name: "four",
      img: "img/frog_four.jpeg",
    },
    {
      name: "four",
      img: "img/frog_four.jpeg",
    },
    {
      name: "five",
      img: "img/frog_five.jpeg",
    },
    {
      name: "five",
      img: "img/frog_five.jpeg",
    },
    {
      name: "six",
      img: "img/frog_six.jpeg",
    },
    {
      name: "six",
      img: "img/frog_six.jpeg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid"); // create constant with our div grid
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  // creating a board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/blank.jpeg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  createBoard();
  //Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      // alert("You found a match");
      cards[optionOneId].setAttribute("src", "img/white.png");
      cards[optionOneId].setAttribute("status", "out");
      cards[optionTwoId].setAttribute("src", "img/white.png");
      cards[optionTwoId].setAttribute("status", "out");

      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "img/blank.jpeg");
      cards[optionTwoId].setAttribute("src", "img/blank.jpeg");
      cards[optionOneId].removeAttribute("status");
      cards[optionTwoId].removeAttribute("status");
      // alert("Sorry, try again!");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulation! You found them all!";
    }
  }
  // flip the card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    if (!this.hasAttribute("status")) {
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.setAttribute("src", cardArray[cardId].img);
      this.setAttribute("status", "");
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  }
});

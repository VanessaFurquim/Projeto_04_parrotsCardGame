// variáveis globais. //
let numberOfCards;
const listOfCards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
let countingCardTurns = 0;
let countingCorrectPairings = 0;

// função para determinação da quantidade de cartas. //
amountOfCards ();

function amountOfCards() {
    numberOfCards = prompt ("Com quantas cartas você quer jogar?");
        if (numberOfCards % 2 !== 0 || numberOfCards < 4 || numberOfCards > 14) {
        amountOfCards();
    } else {
        distributingCards();
    }
}

// função para distribuir cartas na tela. //
function distributingCards() {
    let arrayOfCards = [];

    let card = document.querySelector(".game-table");

    for (let i = 0; i < (numberOfCards/2); i++) {
        const addCard = 
        `<div class = "card-shape" onclick="turnCard(this)">
            <div class = "card-basic-visual front-face">
                <img src="style/Parrot-images/${listOfCards[i]}.gif">
            </div>
            <div class = "card-basic-visual back-face">
                <img src="style/Parrot-images/front.png">
            </div>
        </div>`;

        arrayOfCards.push(addCard);
        arrayOfCards.push(addCard);
    }

    // função para embaralhamento das cartas. //
    function randomizingIndex() { 
	    return Math.random() - 0.5; 
    }

    arrayOfCards.sort(randomizingIndex);

    for (let i = 0; i < arrayOfCards.length; i++) {
        card.innerHTML += arrayOfCards[i];
    }
}



function turnCard(flip) {
    flip.classList.add("turn-card");
}
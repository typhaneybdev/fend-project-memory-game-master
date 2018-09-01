/*
 * Create a list that holds all of your cards
 */
const cards = ["fa fa-diamond", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-bolt",
   "fa fa-cube", "fa fa-anchor", "fa fa-leaf", "fa fa-bicycle", "fa fa-diamond", "fa fa-bomb",
   "fa fa-leaf", "fa fa-bomb", "fa fa-bolt", "fa fa-bicycle", "fa fa-paper-plane-o",
   "fa fa-cube"];

const deck = document.querySelector('.deck');


function generateCard(card) {
    return `<li class="card" data-card="${card}"><i class="fa ${card}"></i></li>`;
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

//p3 walk through with Mike Wales 5/23/18 https://www.youtube.com/watch?v=_rUH-sEs68Y
//declaring cards and adding click event. using tuturial and own logic

initGame();

function initGame() {
    const cardHTML = shuffle(cards).map(function(card) {
          return generateCard(card);
    });
console.log(cardHTML);
    deck.innerHTML = cardHTML.join('');
}

const allCards = document.querySelectorAll('.card');
//declare empty array to hold flipped cards
let flippedCards = [];

allCards.forEach(function(card) {
    card.addEventListener('click', function(e) {


        const clicked = e.target; //https://api.jquery.com/event.target/
        //pushes flipped card into an array
        flippedCards.push(clicked); //https://www.w3schools.com/jsref/jsref_push.asp
        card.classList.add('open', 'show'); //adds class to show flipped card and icon

        //check for match
        if (flippedCards.length === 2) {
            if (flippedCards[0].dataset.card == flippedCards[1].dataset.card) {
                flippedCards[0].classList.add('match');
                flippedCards[0].classList.add('open');
                flippedCards[0].classList.add('show');

                flippedCards[1].classList.add('match');
                flippedCards[1].classList.add('open');
                flippedCards[1].classList.add('show');
                flippedCards = [];

            } else { // if no match hide
            setTimeout(function() {
                flippedCards.forEach(function(card) {
                    card.classList.remove('open', 'show');
              });

              flippedCards = [];
            }, 1000);
          }
        }

  });
});

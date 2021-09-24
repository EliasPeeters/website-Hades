document.getElementsByClassName('flashcardWrapper')[0].style.display = 'flex';
let allCardsVisible = false;

let activeCard = 0

function showAnswer(classInput) {
    document.getElementsByClassName(classInput)[0].style.visibility = 'visible';
}


function showNextCard(classInputNumber) {
    try {
        document.getElementsByClassName('card' + (classInputNumber + 1))[0].style.display = 'flex';
        document.getElementsByClassName('card' + (classInputNumber ))[0].style.display = 'none';
        activeCard  = classInputNumber;
    } catch {
        alert('Yo did it!')
    }
}


function showAllCards() {
    let cards = document.getElementsByClassName('flashcardWrapper');
    let answer = document.getElementsByClassName('answer');
    let button = document.getElementsByClassName('showAllCardsButton')[0]
    if (allCardsVisible) {
        for (let i = 0; i < cards.length; i++) {
            if (i != activeCard) {
                cards[i].style.display = 'none';
                answer[i].style.visibility = 'hidden'
            } else {
                answer[i].style.visibility = 'hidden'
            }
        }
        button.innerHTML = 'Show All Cards';
        allCardsVisible = false;
    } else {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = 'flex';
            answer[i].style.visibility = 'visible'
        }
        button.innerHTML = 'Hide All Cards';
        allCardsVisible = true;
    }
}
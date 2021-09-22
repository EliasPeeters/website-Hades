document.getElementsByClassName('flashcardWrapper')[0].style.display = 'flex';

function showAnswer(classInput) {
    document.getElementsByClassName(classInput)[0].style.visibility = 'visible';
}

function showNextCard(classInputNumber) {
    try {
        document.getElementsByClassName('card' + (classInputNumber + 1))[0].style.display = 'flex';
        document.getElementsByClassName('card' + (classInputNumber ))[0].style.display = 'none';
    } catch {
        alert('Yo did it!')
    }
    
    
}
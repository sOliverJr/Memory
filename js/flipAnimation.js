// var card = document.querySelector('.card');
// function test() {
//     card.classList.toggle('is-flipped');
//   }
// card.addEventListener( 'click', test());



var side;

function flipCard(cardNumber) {
    side = document.getElementById("tt" + cardNumber).className;
    if  (side == "card") {
        document.getElementById("tt" + cardNumber).className = "card is-flipped";
    } else {
        document.getElementById("tt" + cardNumber).className = "card";
    }
}
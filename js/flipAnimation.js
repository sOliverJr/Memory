// var card = document.querySelector('.card');
// function test() {
//     card.classList.toggle('is-flipped');
//   }
// card.addEventListener( 'click', test());



var side;

function flipCard() {
    side = document.getElementById("tt").className;
    if  (side == "card") {
        document.getElementById("tt").className = "card is-flipped";
    } else {
        document.getElementById("tt").className = "card";
    }
}
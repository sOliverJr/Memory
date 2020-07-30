var arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
var erstesBild;
var zweitesBild;
var erstesBildPosition;
var zweitesBildPosition;
var zugNummer = 1;
var gefundenePaare = 0;
var aktuelleLage;
var randomIndex;
var temporaryValue;
var i = 1;
var anzahlZüge = 0;
var side;


    // Function to shuffle the array witch is going to randomly assign the imges to the cards.
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
        // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
        // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
        // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

    // Function that assigns the images to the cards.
function assignImgageToDiv(){
    while (i <= 16){
        assignImage(i);
        i = i+1;
    }
}

    // Functon needed for the one before.
function assignImage(numPlace){
    document.getElementById("img" + numPlace).src = 'Images/' + arr[numPlace - 1] + '.jpeg';
}


    // Function for turning the cards at the start.
function flipCard(cardNumber) {
    side = document.getElementById("tt" + cardNumber).className;
    if  (side == "card") {
        document.getElementById("tt" + cardNumber).className = "card is-flipped";
    } else {
        document.getElementById("tt" + cardNumber).className = "card";
    }
}

    // Changes the side of the card once clicked.
function spielChangeSide(cardNumber){
        // Test witch side of the card is displayed.
    aktuelleLage = document.getElementById("tt" + cardNumber);
        // If the front ist displayed.
    if (aktuelleLage.className == "card"){
            // AND ist is the time to flip a card.
        if(zugNummer <= 2){
                // Flips the Card -> reveals backside.
            document.getElementById("tt" + cardNumber).className = "card is-flipped";
                // Tests if it is the first oir second card flipped, ans acts accordingly.
            if (zugNummer == 1){
                erstesBild = document.getElementById("img" + cardNumber);
                erstesBildPosition = cardNumber;
                zugNummer = 2;
            }else {
                anzahlZüge = anzahlZüge + 1;
                document.getElementById("MCp2").innerHTML = anzahlZüge;
                zweitesBild = document.getElementById("img" + cardNumber);
                zweitesBildPosition = cardNumber;
                zugNummer = 3;
                    // Gives a little bit of time for the animation.
                window.setTimeout(paarTest, 1000);
            }
        }
    }
        // Tests if two card are flipped, if they are the same or not.
    function paarTest() {
            // Checks if already two cards have been flipped.
        if(zugNummer == 3){
                // If the pictures are the same.
            if (erstesBild.src == zweitesBild.src) {
                    // Adds one to the count of found cards and displays it.
                gefundenePaare = gefundenePaare + 1;
                document.getElementById("Gp2").innerHTML = gefundenePaare + "/8";
                if(gefundenePaare == 8){
                        // If all pairs are found display victory message.
                    document.getElementById("erfolg").className = "Erfolg";
                }
            }else{
                // If not the same card, they are bioth flipped again.
                document.getElementById("tt" + erstesBildPosition).className = "card";
                document.getElementById("tt" + zweitesBildPosition).className = "card";
                }
                // Reset the move count to the insitial state.
            zugNummer = 1;
        }
    }

        
}

    // Starts the game when clicked.
function start(){
        // Change the button from "Start" to "Cancel".
    document.getElementById("S/S").className = "ButtonC"
    shuffle(arr)
    assignImgageToDiv()
    var i2 = 1;
    var i3 = 1;
        // Sets the time the player has to see the card.
    window.setTimeout(ausblenden, 3000);
        // Flips all the cards so backside is shown.
    while(i2 <= 16){
        flipCard(i2);
        i2 = i2+1;
    }
        // Flips all card again so the front side is shown.
    function ausblenden() {
        while(i3 <= 16){
            flipCard(i3);
            i3 = i3+1;
        }
    }
    erstesBild = "";
    zweitesBild = "";
    zugNummer = 1;
}
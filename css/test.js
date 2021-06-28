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

function assignImgageToDiv(){
    while (i <= 16){
        assignImage(i);
        i = i+1;
    }
}

function assignImage(numPlace){
    document.getElementById("img" + numPlace).src = 'Images/' + arr[numPlace - 1] + '.jpeg';
}

function changeSide(nummer){

    var seite = document.getElementById("Test" + nummer);
    if (seite.className == 'Card1'){
        document.getElementById("Test" + nummer).className = 'Card2';
    }else {
        document.getElementById("Test" + nummer).className = 'Card1';
    }
    

}

function spielChangeSide(nummer){
    aktuelleLage = document.getElementById("Test" + nummer);

    if (aktuelleLage.className == "Card1"){
        if(zugNummer <= 2){
            document.getElementById("Test" + nummer).className = 'Card2';

            if (zugNummer == 1){
                erstesBild = document.getElementById("img" + nummer);
                erstesBildPosition = nummer;
                zugNummer = 2;
            }else {
                anzahlZüge = anzahlZüge + 1;
                document.getElementById("MCp2").innerHTML = anzahlZüge;
                zweitesBild = document.getElementById("img" + nummer);
                zweitesBildPosition = nummer;
                zugNummer = 3;

                window.setTimeout(paarTest, 2000);
            }
        }
    }
    
    function paarTest() {
        if(zugNummer == 3){
            if (erstesBild.src == zweitesBild.src) {
                gefundenePaare = gefundenePaare + 1;
                document.getElementById("Gp2").innerHTML = gefundenePaare + "/8";
                if(gefundenePaare == 8){
                    document.getElementById("erfolg").className = "Erfolg";
                }
            }else{
                document.getElementById("Test" + erstesBildPosition).className = 'Card1';
                document.getElementById("Test" + zweitesBildPosition).className = 'Card1';
            }
            zugNummer = 1;
        }
    }

        
}

function start(){
    document.getElementById("S/S").className = "ButtonC"
    shuffle(arr)
    assignImgageToDiv()
    var i2 = 1;
    var i3 = 1;

    window.setTimeout(ausblenden, 5000);

    while(i2 <= 16){
        changeSide(i2);
        i2 = i2+1;
    }
    
    function ausblenden() {
        while(i3 <= 16){
            changeSide(i3);
            i3 = i3+1;
        }
    }
    erstesBild = "";
    zweitesBild = "";
    zugNummer = 1;
}
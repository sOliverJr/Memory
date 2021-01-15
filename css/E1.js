var arr = [3,3,5];
var erstesBild;
var zweitesBild;
var erstesBildPosition;
var zweitesBildPosition;
var zugNummer = 1;
var gefundenePaare = 0;
var aktuelleLage;


function assignImage(numPlace){
    document.getElementById("jpeg" + numPlace).src = 'Images/' + arr[numPlace] + '.jpeg';
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
    var i2 = 1;
    var i3 = 1;

    window.setTimeout(ausblenden, 5000);

    while(i2 <= 2){
        changeSide(i2);
        i2 = i2+1;
    }
    
    function ausblenden() {
        while(i3 <= 2){
            changeSide(i3);
            i3 = i3+1;
        }
    }
    erstesBild = "";
    zweitesBild = "";
    zugNummer = 1;
}
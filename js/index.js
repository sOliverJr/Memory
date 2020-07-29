var diff = "null";
var diffX;
var player = "null";
var playerX;
var GMDifficulty;
var GMPlayers;
var GM;

function detectDiff() {
    diffX = document.getElementById("Diff");
    diff = diffX.options[diffX.selectedIndex].text;
    if (diff == "Easy"){
        GMDifficulty = "E";
    }else if (diff == "Normal"){
        GMDifficulty = "N";
    }else{
        GMDifficulty = "H";
    }
}

function detectPlayers() {
    playerX = document.getElementById("Play");
    player = playerX.options[playerX.selectedIndex].text;
    if (player == "1 Player"){
        GMPlayers = "1";
    }else if (player == "2 Players"){
        GMPlayers = "2";
    }else{
        GMPlayers = "3";
    }
}

function start(){
    if (diff == "null" && player == "null"){
        alert("Please select the Difficulty and amount of Players.");
    } else if (diff != "null" && player == "null"){
        alert("Please select the amount of Players.");
    } else if (diff == "null" && player != "null"){
        alert("Please select the Difficulty");
    } else if (diff != "null" && player != "null"){
        alert("Sucess")
    }
}
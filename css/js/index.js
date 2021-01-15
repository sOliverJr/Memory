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
        if (diff == "Easy" && player == "1 Player"){
            window.location.href = "http://www.oliverseider.com/E1";
        }else if (diff == "Easy" && player == "2 Players"){
            window.location.href = "http://www.oliverseider.com/E2";
        }else if (diff == "Easy" && player == "3 Players"){
            alert("E3");
        }else if (diff == "Normal" && player == "1 Player"){
            alert("M1");
        }else if (diff == "Normal" && player == "2 Players"){
            alert("M2");
        }else if (diff == "Normal" && player == "3 Players"){
            alert("M3");
        }else if (diff == "Hard" && player == "1 Player"){
            alert("H1");
        }else if (diff == "Hard" && player == "2 Players"){
            alert("H2");
        }else {
            alert("H3");
        }
    }
}
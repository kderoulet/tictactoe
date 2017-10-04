$(function(){
/*----- constants -----*/

/*----- app's state (variables) -----*/
var boardState;
var turnCounter;
var placement;
var firstScore;
var secondScore;

/*----- cached element references -----*/
var firstScore = 0;
var secondScore = 0;

/*----- event listeners -----*/
function createClickEvents() {
$('#tl').on("click", function() {
    placeCharacter(0)
})
$('#tm').on("click", function() {
    placeCharacter(1)
})
$('#tr').on("click", function() {
    placeCharacter(2)
})
$('#ml').on("click", function() {
    placeCharacter(3)
})
$('#mm').on("click", function() {
    placeCharacter(4)
})
$('#mr').on("click", function() {
    placeCharacter(5)
})
$('#bl').on("click", function() {
    placeCharacter(6)
})
$('#bm').on("click", function() {
    placeCharacter(7)
})
$('#br').on("click", function() {
    placeCharacter(8)
})
}
$('button').on("click", function() {
    init();
})
/*----- functions -----*/

function init() {
    boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    resetBoard();
    turnCounter = 1;
    createClickEvents();
    render();
}

function placeCharacter(num) {
if (boardState[num] === 0)    
    if (turnCounter % 2 === 1) {
        boardState[num] = 1;
        turnCounter = turnCounter+1
        render();
    }
    else {
        boardState[num] = 2;
        turnCounter = turnCounter+1
        render();
    }
else return;
}

function playerTurn() {
    if (turnCounter % 2 === 1) {
        $(".turnCard").html("Player One's Turn");
    }
    else {$(".turnCard").html("Player Two's Turn")}
}

function checkWinner(num) {
    if (boardState[0] === num && boardState[1] === num && boardState[2] === num)
        playerWins(num);
    else if (boardState[3] === num && boardState[4] === num && boardState[5] === num)
        playerWins(num);
    else if (boardState[6] === num && boardState[7] === num && boardState[8] === num)
        playerWins(num);
    else if (boardState[0] === num && boardState[3] === num && boardState[6] === num)
        playerWins(num);
    else if (boardState[1] === num && boardState[4] === num && boardState[7] === num)
        playerWins(num);
    else if (boardState[2] === num && boardState[5] === num && boardState[8] === num)
        playerWins(num);
    else if (boardState[0] === num && boardState[4] === num && boardState[8] === num)
        playerWins(num);
    else if (boardState[2] === num && boardState[4] === num && boardState[6] === num)
        playerWins(num);
    else if (boardState.includes(0) === false)
        tie();
    else return;
}

function render() {
    playerTurn();
    updateScore();
    renderBoard();
    checkWinner(1);
    checkWinner(2);
}

function renderBoard() {
        {if (boardState[0] === 1)
            $("#tl").html("x")
        else if (boardState[0] === 2)
            $("#tl").html("o")}
        
        {if (boardState[1] === 1)
            $("#tm").html("x")
        else if (boardState[1] === 2)
            $("#tm").html("o")
        }
        {if (boardState[2] === 1)
            $("#tr").html("x")
        else if (boardState[2] === 2)
            $("#tr").html("o")
        }
        {if (boardState[3] === 1)
            $("#ml").html("x")
        else if (boardState[3] === 2)
            $("#ml").html("o")
        }
        {if (boardState[4] === 1)
            $("#mm").html("x")
        else if (boardState[4] === 2)
            $("#mm").html("o")
        }
        {if (boardState[5] === 1)
            $("#mr").html("x")
        else if (boardState[5] === 2)
            $("#mr").html("o")
        }
        {if (boardState[6] === 1)
            $("#bl").html("x")
        else if (boardState[6] === 2)
            $("#bl").html("o")
        }
        {if (boardState[7] === 1)
            $("#bm").html("x")
        else if (boardState[7] === 2)
            $("#bm").html("o")
        }
        {if (boardState[8] === 1)
            $("#br").html("x")
        else if (boardState[8] === 2)
            $("#br").html("o")
        }
}

function updateScore() {
    $(".scoreCard").html("Player 1: " + firstScore + "; Player 2: " + secondScore)
}

function playerWins(num) {
    if (num === 1) {
        $(".turnCard").html("Player One Wins!")
        firstScore = firstScore +1;
        $('td').off('click');
    }
    else {
        $(".turnCard").html("Player Two Wins!")
        secondScore = secondScore +1;
        $('td').off('click');        
    }
}
function tie() {
    $(".turnCard").html("It's a tie!")
    $('td').off('click');
}
function resetBoard() {
    $("table").html("<tr><td id='tl'></td><td id='tm'> </td><td id='tr'> </td></tr><tr><td id='ml'> </td><td id='mm'> </td><td id='mr'> </td></tr><tr><td id='bl'></td><td id='bm'></td><td id='br'></td></tr>")
}

init();
});
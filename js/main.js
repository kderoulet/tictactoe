// /*----- constants -----*/



// /*----- app's state (variables) -----*/



// [x, x, x, 0, 0, 0, 0, 0, 0]
// [0, 0, 0, x, x, x, 0, 0, 0]
// [0, 0, 0, 0, 0, 0, x, x, x]
// [x, 0, 0, x, 0, 0, x, 0, 0]
// [0, x, 0, 0, x, 0, 0, x, 0]
// [0, 0, x, 0, 0, x, 0, 0, x]
// [x, 0, 0, 0, x, 0, 0, 0, x]
// [0, 0, x, 0, x, 0, x, 0, 0]
var newLetter;
var score = [0, 0];
var boardState = [];
var turnCounter;

// /*----- cached element references -----*/


// /*----- event listeners -----*/

document.querySelector("table").addEventListener("click", handleClick);
document.querySelector("button").addEventListener("click", resetButton);


// /*----- functions -----*/


 function resetButton() {
    init();
 }


function playerOneWins() {
        document.querySelector(".turnCard").textContent = "Player 1 Wins!";
        score[0] = score[0]+1;
        document.querySelector("table").removeEventListener("click", handleClick);
        
    }
function playerTwoWins() {
        document.querySelector(".turnCard").textContent = "Player 2 Wins!";
        score[1] = score[1]+1;
        document.querySelector("table").removeEventListener("click", handleClick);
        
    }

function handleClick(evt) {
        if (evt.target.textContent === "x" || evt.target.textContent === "o") {
           console.log("Herrr!"); 
           return}
        else {evt.target.textContent = newLetter;
       updateBoard;
       turnCounter++;
       nextTurn();
       }
    }  

function nextTurn() 
    {if (turnCounter % 2 === 1) {
       document.querySelector(".turnCard").textContent = "Player One's Turn";
       newLetter = "x";
       render();
    }
    else {document.querySelector(".turnCard").textContent = "Player Two's Turn";
       newLetter = "o";
       render();
   }};

function render() {
    updateBoard();
    checkWinnerOne();
    checkWinnerTwo();
};

function renderScore() {
    if (score[0] >= 1 || score[1] >= 1) {
        document.querySelector(".scoreCard").textContent = "Player 1: " + score[0] + "; Player 2: " + score[1];
    } else return;};

function checkWinnerOne() {
    if (boardState[0] === 1 && boardState[1] === 1 && boardState[2] === 1) {
    playerOneWins();}
    else if (boardState[3] === 1 && boardState[4] === 1 && boardState[5] === 1) {
    playerOneWins();}
    else if (boardState[6] === 1 && boardState[7] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[0] === 1 && boardState[3] === 1 && boardState[6] === 1) {
    playerOneWins();}
    else if (boardState[1] === 1 && boardState[4] === 1 && boardState[7] === 1) {
    playerOneWins();}
    else if (boardState[2] === 1 && boardState[5] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[0] === 1 && boardState[5] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[2] === 1 && boardState[4] === 1 && boardState[6] === 1) {
    playerOneWins();}}
function checkWinnerTwo() {
    if (boardState[0] === 2 && boardState[1] === 2 && boardState[2] === 2) {
        playerTwoWins();}
    else if (boardState[3] === 2 && boardState[4] === 2 && boardState[5] === 2) {
        playerTwoWins();}
    else if (boardState[6] === 2 && boardState[7] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[0] === 2 && boardState[3] === 2 && boardState[6] === 2) {
        playerTwoWins();}
    else if (boardState[1] === 2 && boardState[4] === 2 && boardState[7] === 2) {
        playerTwoWins();}
    else if (boardState[2] === 2 && boardState[5] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[0] === 2 && boardState[5] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[2] === 2 && boardState[4] === 2 && boardState[6] === 2) {
        playerTwoWins();}
};

function updateBoard() {
    if (document.querySelector("#tl").textContent === "x") {
        boardState[0] = 1;}
    else if (document.querySelector("#tl").textContent === "o") {
        boardState[0] = 2;};
    if (document.querySelector("#ml").textContent === "x") {
        boardState[1] = 1;}
    else if (document.querySelector("#ml").textContent === "o") {
        boardState[1] = 2;};    
    if (document.querySelector("#bl").textContent === "x") {
        boardState[2] = 1;}
    else if (document.querySelector("#bl").textContent === "o") {
        boardState[2] = 2;};
    if (document.querySelector("#tm").textContent === "x") {
        boardState[3] = 1;}
    else if (document.querySelector("#tm").textContent === "o") {
        boardState[3] = 2;};
    if (document.querySelector("#mm").textContent === "x") {
        boardState[4] = 1;}
    else if (document.querySelector("#mm").textContent === "o") {
        boardState[4] = 2;};
    if (document.querySelector("#mb").textContent === "x") {
        boardState[5] = 1;}
    else if (document.querySelector("#mb").textContent === "o") {
        boardState[5] = 2;};    
    if (document.querySelector("#tr").textContent === "x") {
        boardState[6] = 1;}
    else if (document.querySelector("#tr").textContent === "o") {
        boardState[6] = 2;};
    if (document.querySelector("#mr").textContent === "x") {
        boardState[7] = 1;}
    else if (document.querySelector("#mr").textContent === "o") {
        boardState[7] = 2;};
    if (document.querySelector("#br").textContent === "x") {
        boardState[8] = 1;}
    else if (document.querySelector("#br").textContent === "o") {
        boardState[8] = 2;};
}

// /*----- cached element references -----*/


// /*----- event listeners -----*/
document.querySelector("button").addEventListener("click", resetButton);


// /*----- functions -----*/

function init() {
 newLetter = "x";
 boardState = [0, 0, 0, 0, 0, 0, 0, 0, 0];
 turnCounter = 1;
 renderScore();
 document.querySelector(".turnCard").textContent = "Player One's Turn";
 render();
 document.querySelector("#tl").textContent = "";
 document.querySelector("#tm").textContent = "";
 document.querySelector("#tr").textContent = "";
 document.querySelector("#ml").textContent = "";
 document.querySelector("#mm").textContent = "";
 document.querySelector("#mr").textContent = "";
 document.querySelector("#bl").textContent = "";
 document.querySelector("#mb").textContent = "";
 document.querySelector("#br").textContent = "";
 document.querySelector("table").addEventListener("click", handleClick);  
}



function renderWinner() {
    if (boardState[0] === 1 && boardState[1] === 1 && boardState[2] === 1) {
    playerOneWins();}
    else if (boardState[3] === 1 && boardState[4] === 1 && boardState[5] === 1) {
    playerOneWins();}
    else if (boardState[6] === 1 && boardState[7] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[0] === 1 && boardState[3] === 1 && boardState[6] === 1) {
    playerOneWins();}
    else if (boardState[1] === 1 && boardState[4] === 1 && boardState[7] === 1) {
    playerOneWins();}
    else if (boardState[2] === 1 && boardState[5] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[0] === 1 && boardState[5] === 1 && boardState[8] === 1) {
    playerOneWins();}
    else if (boardState[2] === 1 && boardState[4] === 1 && boardState[6] === 1) {
    playerOneWins();}
    else if (boardState[0] === 2 && boardState[1] === 2 && boardState[2] === 2) {
        playerTwoWins();}
    else if (boardState[3] === 2 && boardState[4] === 2 && boardState[5] === 2) {
        playerTwoWins();}
    else if (boardState[6] === 2 && boardState[7] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[0] === 2 && boardState[3] === 2 && boardState[6] === 2) {
        playerTwoWins();}
    else if (boardState[1] === 2 && boardState[4] === 2 && boardState[7] === 2) {
        playerTwoWins();}
    else if (boardState[2] === 2 && boardState[5] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[0] === 2 && boardState[5] === 2 && boardState[8] === 2) {
        playerTwoWins();}
    else if (boardState[2] === 2 && boardState[4] === 2 && boardState[6] === 2) {
        playerTwoWins();}
    else nextTurn();
};

function updateBoard() {
    if (document.querySelector("#tl").textContent === "x") {
        boardState[0] = 1;}
    else if (document.querySelector("#tl").textContent === "o") {
        boardState[0] = 2;};
    if (document.querySelector("#ml").textContent === "x") {
        boardState[1] = 1;}
    else if (document.querySelector("#ml").textContent === "o") {
        boardState[1] = 2;};    
    if (document.querySelector("#bl").textContent === "x") {
        boardState[2] = 1;}
    else if (document.querySelector("#bl").textContent === "o") {
        boardState[2] = 2;};
    if (document.querySelector("#tm").textContent === "x") {
        boardState[3] = 1;}
    else if (document.querySelector("#tm").textContent === "o") {
        boardState[3] = 2;};
    if (document.querySelector("#mm").textContent === "x") {
        boardState[4] = 1;}
    else if (document.querySelector("#mm").textContent === "o") {
        boardState[4] = 2;};
    if (document.querySelector("#mb").textContent === "x") {
        boardState[5] = 1;}
    else if (document.querySelector("#mb").textContent === "o") {
        boardState[5] = 2;};    
    if (document.querySelector("#tr").textContent === "x") {
        boardState[6] = 1;}
    else if (document.querySelector("#tr").textContent === "o") {
        boardState[6] = 2;};
    if (document.querySelector("#mr").textContent === "x") {
        boardState[7] = 1;}
    else if (document.querySelector("#mr").textContent === "o") {
        boardState[7] = 2;};
    if (document.querySelector("#br").textContent === "x") {
        boardState[8] = 1;}
    else if (document.querySelector("#br").textContent === "o") {
        boardState[8] = 2;};
    
}

init();
//HTML Elements
const statusDiv = document.querySelector('.status');
const restart = document.querySelector('.restart');
const gameCells = document.querySelectorAll('.game-cell');

//Game Variable
let gameIsLive = true;
let xIsNext = true;
let winner = null;

// Game Constants
const xSymbol ='×';
const oSymbol= '◯';


// Functions

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  winner= letter;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(winner)} WINNER!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(winner)} WINNER!</span>`;
  }
}; 
const checkGameStatus = () => {
    const topLeft = gameCells[0].classList[1];
    const topMiddle = gameCells[1].classList[1];
    const topRight = gameCells[2].classList[1];
    const middleLeft = gameCells[3].classList[1];
    const middleMiddle = gameCells[4].classList[1];
    const middleRight = gameCells[5].classList[1];
    const bottomLeft = gameCells[6].classList[1];
    const bottomMiddle = gameCells[7].classList[1];
    const bottomRight = gameCells[8].classList[1];



//Winner
if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
} else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
} else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusDiv.innerHTML = 'DRAW!';
} else {
    xIsNext =!xIsNext;
  if (xIsNext) {
        statusDiv.innerHTML = `${xSymbol} Turn`;
  } else {
      statusDiv.innerHTML = `<span> ${oSymbol} Turn </span>`;
  }
}
};



// Event Handlers
const handleRestart =(e) => {
   console.log(e);
};
const handleClickCell = (e) => {
    const classList = e.target.classList;
   
    const locaton = classList[1];

    if (classList[2] === 'x' || classList[2] === 'o') {
        return;
    } 

    if (xIsNext) {
        classList.add('x');
        checkGameStatus();
        
    } else {
        classList.add('o');
        checkGameStatus();
    }
    
};

//Add Event Listeners
restart.addEventListener('click', handleRestart);
for(const gameCell of gameCells) {
    gameCell.addEventListener('click', handleClickCell)
} 

//HTML Elements
const statusDiv = document.querySelector('.status');
const restart = document.querySelector('.restart');
const gameCells = document.querySelectorAll('.game-cell');

//Game Variable
let gameIsLive = true;
let xIsNext = true;


// Game Constants
const xSymbol ='×';
const oSymbol= '◯';


// Functions

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    statusDiv.innerHTML = `${letterToSymbol(letter)} WINNER!`;
  } else {
    statusDiv.innerHTML = `<span>${letterToSymbol(letter)} WINNER!</span>`;
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
    gameCells[0].classList.add('won');
    gameCells[1].classList.add('won');
    gameCells[2].classList.add('won');
} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    gameCells[3].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[5].classList.add('won');
} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    gameCells[6].classList.add('won');
    gameCells[7].classList.add('won');
    gameCells[8].classList.add('won');
} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[3].classList.add('won');
    gameCells[6].classList.add('won');
} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    gameCells[1].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[7].classList.add('won');
} else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[5].classList.add('won');
    gameCells[8].classList.add('won');
} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[8].classList.add('won');
} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[6].classList.add('won');
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
   xIsNext = true;
   statusDiv.innerHTML = `${xSymbol} Turn`;
   for (const gameCell of gameCells) {
       gameCell.classList.remove('x');
       gameCell.classList.remove('o');
       gameCell.classList.remove('won');
   }
   gameIsLive = true;
};
const handleClickCell = (e) => {
    const classList = e.target.classList;


    if (!gameIsLive || classList[1] === 'x' || classList[1] === 'o') {
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


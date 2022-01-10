//HTML Elements
const nextTurn = document.querySelector('.turn');
const restart = document.querySelector('.restart');
const gameCells = document.querySelectorAll('.game-cell');

//Game VAriable
let gameIsLive = true;
let xIsNext = true;


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
        xIsNext =!xIsNext;
    } else {
        classList.add('o');
        xIsNext =!xIsNext;
    }
    
};

//Add Event Listeners
restart.addEventListener('click', handleRestart);
for(const gameCell of gameCells) {
    gameCell.addEventListener('click', handleClickCell)
}

// Variables
const xSymbol ='×';
const oSymbol= '◯';

//DOM Elements









// restart.addEventListener('click', handleRestart);

// for (const gameCell of gameCell) {
//   gameCell.addEventListener('click', handlegameCell)
// }

//   const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

// const handleWin = (letter) => {
//   gameIsLive = false;
//   if (letter === 'x') {
//     statusDiv.innerHTML = `${letterToSymbol(letter)} has won!`;
//   } else {
//     statusDiv.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
//   }
// }; 

// const checkGameStatus = () => {
//   const topLeft = gameCell[0].classList[1];
//   const topMiddle = gameCell[1].classList[1];
//   const topRight = gameCell[2].classList[1];
//   const middleLeft = gameCell[3].classList[1];
//   const middleMiddle = gameCell[4].classList[1];
//   const middleRight = gameCell[5].classList[1];
//   const bottomLeft = gameCell[6].classList[1];
//   const bottomMiddle = gameCell[7].classList[1];
//   const bottomRight = gameCell[8].classList[1];
// }
// console.log(letterToSymbol);


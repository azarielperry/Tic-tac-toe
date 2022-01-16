//HTML Elements
const statusDiv = document.querySelector('.status');
const restart = document.querySelector('.restart');
const gameCells = document.querySelectorAll('.game-cell');
const displayText = document.querySelector('.text');

//Game Variable
let gameIsLive = true;
let xIsNext = true;

 
// Game Constants
// const xSymbol ='×';
// const oSymbol= '◯';
let human = '◯';
let ai = '×';
let currentPlayer = human;
let winner = null;


// Functions

// const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;
const letterToSymbol = (letter) => letter === 'x' ? ai : human;

function mousePressed() {
    if (currentPlayer == human) {
      // Human make turn
      let i = floor(mouseX / w);
      let j = floor(mouseY / h);
      // If valid turn
      if (board[i][j] == '') {
        board[i][j] = human;
        currentPlayer = ai;
        bestMove();
      }
    }
  }
  


const handleWin = (letter) => {
  gameIsLive = false;
  if (letter === 'x') {
    displayText.innerHTML = `${letterToSymbol(letter)} WINNER!`;
  } else {
    displayText.innerHTML = `<span>${letterToSymbol(letter)} WINNER!</span>`;
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
     statusDiv.innerHTML = 'Game Over';
     document.querySelector(".endgame").style.display ="";
} else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    gameCells[3].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[5].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    gameCells[6].classList.add('won');
    gameCells[7].classList.add('won');
    gameCells[8].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[3].classList.add('won');
    gameCells[6].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    gameCells[1].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[7].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[5].classList.add('won');
    gameCells[8].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    gameCells[0].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[8].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    gameCells[2].classList.add('won');
    gameCells[4].classList.add('won');
    gameCells[6].classList.add('won');
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    displayText.innerHTML = 'DRAW!';
    statusDiv.innerHTML = 'Game Over';
    document.querySelector(".endgame").style.display ="";
} else {
    xIsNext =!xIsNext;
  if (xIsNext) {
        statusDiv.innerHTML = `${xSymbol} Turn`;
        
  } else { 
      (statusDiv.innerHTML = `<span> ${oSymbol} Turn </span>`);
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
       document.querySelector(".endgame").style.display ="none";
    
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
        checkGameStatus();addEventListener
        
       
    }              
    
};

//Add Event Listeners
restart.addEventListener('click', handleRestart);
for(const gameCell of gameCells) {
    gameCell.addEventListener('click', handleClickCell)
} 







// function bestMove() {
//     // AI to make its turn
//     let bestScore = -Infinity;
//     let move;
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//         // Is the spot available?
//         if (board[i][j] == '') {
//           board[i][j] = ai;
//           let score = minimax(board, 0, false);
//           board[i][j] = '';
//           if (score > bestScore) {
//             bestScore = score;
//             move = { i, j };
//           }
//         }
//       }
//     }
//     board[move.i][move.j] = ai;
//     currentPlayer = human;
//   }
  
//   let scores = {
//     X: 10,
//     O: -10,
//     tie: 0
//   };
  
//   function minimax(board, depth, isMaximizing) {
//     let result = han();
//     if (result !== null) {
//       return scores[result];
//     }
  
//     if (isMaximizing) {
//       let bestScore = -Infinity;
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           // Is the spot available?
//           if (board[i][j] == '') {
//             board[i][j] = ai;
//             let score = minimax(board, depth + 1, false);
//             board[i][j] = '';
//             bestScore = max(score, bestScore);
//           }
//         }

//       }
//       return bestScore;
//     } else {
//       let bestScore = Infinity;
//       for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//           // Is the spot available?
//           if (board[i][j] == '') {
//             board[i][j] = human;
//             let score = minimax(board, depth + 1, true);
//             board[i][j] = '';
//             bestScore = min(score, bestScore);
//           }
//         }
//       }
//       return bestScore;
//     }
//   }

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

var bgcolor = ["#FFEA00", "#7EC8E3", "#FFD700", "#9ACD32", "#ADD8E6", , "#40E0D0", "#00FFFF", "#FFDAB9", "#87CEFA"];

function handleClick(index) {
  if (board[index] === "" && !checkWinner()) {
    board[index] = currentPlayer;
    render();
    if (!checkWinner()) {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById("status").innerText = `Player ${currentPlayer} wins!`;
      return true;
    }
  }
  if (board.every(cell => cell !== "")) {
    document.getElementById("status").innerText = "It's a draw!";
    return true;
  }
  return false;
}

function render() {
  board.forEach((cell, index) => {
    document.getElementsByClassName("cell")[index].innerText = cell;
  });
}

function reset() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  document.getElementById("status").innerText = `Player ${currentPlayer}'s turn`;
  render();
}

function changeBackgroundColorBody(){
    document.body.style.background=bgcolor[Math.floor(Math.random()*bgcolor.length)]
}

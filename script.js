let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleMove(cellIndex) {
    if (!gameStatus[cellIndex]) {
        gameStatus[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        
        if (checkWin()) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (checkDraw()) {
            document.getElementById('status').innerText = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

function checkWin() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return gameStatus[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return gameStatus.every(cell => cell !== '');
}

function resetGame() {
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'O';
    document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}


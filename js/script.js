board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

let current_player = '';
function get_current_player() {
    if (current_player == 'X') {
        return 'O';
    }
    return 'X';
}

document.querySelectorAll('.move').forEach((button, index) => {
    
    button.addEventListener('click', (event) => {
        let row = Math.floor(index / 3);
        let col = index % 3;

        if (board[row][col] == null) {
            current_player = get_current_player();
            board[row][col] = current_player;
            event.target.textContent = board[row][col];
            
            let winner = get_winner(board);

            if (winner !== null) {
                alert(`${winner} wins`)
            }
        }
    });

    
});

// Finds the winner of a tic-tac-toe game
function get_winner(board) {
    // Check board validity
    if (board.length != 3) {
        throw new Error('Invalid board');
    }
    
    for (let row of board) {
        if (row.length != 3) {
            throw new Error('Invalid board');
        }
        for (let player of row) {
            if (player !== 'X' && player !== 'O' && player !== null) {
                throw new Error('Invalid board');
            }
        }
    }

    // Diagonals
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        return board[0][0];
    }
    
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2];
    }
    
    // Rows
    for (let row of board) {
        if (row[0] !== null && row[0] === row[1] && row[0] === row[2]) {
            return row[0];
        }
    }
    
    // Columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            return board[0][i];
        }
    }
    
    return null;
}  // get_winner

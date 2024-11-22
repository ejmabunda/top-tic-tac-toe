board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function get_winner(board) {
    // Finds the winner of a tic-tac-toe game
    
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
}

// console.log(get_winner(board))

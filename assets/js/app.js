const app = {
    symbols: ['X', 'O'],
    board: ['', '', '', '', '', '', '', '', ''],
    players: ['Player 1', 'Player 2'],
    currentPlayer: null,
    winnerScore:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    gameInit: function () {
        this.clearBoard();
        this.currentPlayer = null;
    },
    clearBoard: function () {
        const slot = document.querySelectorAll(`.app__slot`)
        for (i in app.board) {
            this.board[i] = '';
            slot[i].innerHTML = '';
        }
    },
    makeAPlay: function (spot) {
        const slot = document.querySelectorAll(`.app__slot`)[spot];
        this.alternatePlayer();
        if (this.board[spot] === '') {
            if (this.currentPlayer == this.players[0]) {
                app.board[spot] = this.symbols[0];
                slot.innerHTML = this.symbols[0];
            } else {
                app.board[spot] = this.symbols[1];
                slot.innerHTML = this.symbols[1];
            }
        } else {
            window.alert('Essa casa já foi preenchida');
            this.alternatePlayer();
        }
        this.gameOver();
    },
    alternatePlayer: function () {
        if (this.currentPlayer === null) {
            this.currentPlayer = this.players[0];
        } else if (this.currentPlayer === this.players[0]) {
            this.currentPlayer = this.players[1];
        } else {
            this.currentPlayer = this.players[0];
        }
    },
    gameOver: function () {
        if (this.board[0] !== '' && this.board[1] !== '' && this.board[2] !== '' && this.board[3] !== '' && this.board[4] !== '' && this.board[5] !== '' && this.board[6] !== '' && this.board[7] !== '' && this.board[8] !== '') {
            this.winner();
        }
    },
    winner: function () {
    }
}
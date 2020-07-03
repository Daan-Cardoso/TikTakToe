
    const app = {
        symbols: ['X', 'O'],
        board: ['','','','','','','','',''],
        players: ['Player 1', 'Player 2'],
        clearBoard: function(){
            for(i in app.board){
                this.board[i] = '';
            }
        },
        
    }

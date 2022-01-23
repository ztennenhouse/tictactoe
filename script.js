let squares = document.querySelector('.squares');
var togplayer = "player1";
var moveCount = 0;


const playerMove = (player, position) => {
    console.log(player + "-" + position);
    test = document.getElementById(position);
    playerMoves = [];
    if (test.textContent === "") { 
        if (player === "player1") {
            test.textContent = "X";
            togplayer = "player2";
            playerMoves.push("X");
            moveCount += 1;
        } else {
            test.textContent = "O";
            togplayer = "player1";
            moveCount += 1;
            playerMoves.push("O");
        }
    } else {
        console.log("exit");
        gameOver();
    }
}



const gameBoard = (() => {

    let board = [];
    for (let i=0; i < 9; i++) {
        board.push(i);
        const square = document.createElement('div');
        square.className = 'square';
        square.setAttribute('id', i);
        squares.appendChild(square);
        square.addEventListener('click', function(){
        playerMove(togplayer, i);}, false);

};

})

// const game = (() => {
//     for (i = 0; i <9; i++) {
//         test = document.getElementById(i);

//     }
//     if()
// })

function gameOver() {
console.log("gameOver test");
}

gameBoard();

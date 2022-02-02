let squares = document.querySelector('.squares');
var togplayer = "player1";
var moveCount = 0;
let location1 = [];
let location2 = [];
let winner = "";

const winCombos = [
    [0, 1 ,2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

function Move(player, position) {
    this.player = player;
    this.position = position;
}



const player = (() => {
    const move = (player, position) => {
    test = document.getElementById(position);
    if (test.textContent === "") { 
        if (player === "player1") {
            test.textContent = "X";
            window.togplayer = "player2";
            moveCount += 1;
            location1.push(new Move("Player 1", position));
        } else {
            test.textContent = "O";
            window.togplayer = "player1";
            moveCount += 1;
            this.player = player;
            this.position = position;
            location2.push(new Move("Player 2", position));

        }
    };
    
}
const checkLocation = (player) => {
    let newp1 = [];
    let newp2 = [];
    if(player === "Player 1") {
        for (let i = 0; i < location1.length; i++) {
            newp1.push(location1[i].position);
        }
        return newp1.sort((a,b)=>a-b);
    } else {
        for (let i = 0; i < location2.length; i++) {
            newp2.push(location2[i].position);
        }
        return newp2.sort((a,b)=>a-b);
    }
};

const checkWin = () => {
    let p1moves = checkLocation("Player 1");
    let p2moves = checkLocation("Player 2");
    for (let i = 0; i < winCombos.length; i++) {
        const containsAll = winCombos[i].every(element => {
            return p1moves.includes(element);
        });
        if (containsAll === true) {
            console.log("Player 1 wins!");
        }
    }
    for (let i = 0; i < winCombos.length; i++) {
        const containsAll = winCombos[i].every(element => {
            return p2moves.includes(element);
        });
        if (containsAll === true) {
            console.log("Player 2 wins!");
        }
    }
}
    return {move, checkLocation,checkWin};})();

    // var playerMoves = [];
    
    // } else {
    //     checkWin();
//     }


// }




const gameBoard = (() => {
    let board = [];
    for (let i=0; i < 9; i++) {
        board.push(i);
        const square = document.createElement('div');
        square.className = 'square';
        square.setAttribute('id', i);
        squares.appendChild(square);
        square.addEventListener('click', function(){
        player.move(togplayer, i);player.checkWin();
;    }, false);
};

})

// const game = (() => {
//     for (i = 0; i <9; i++) {
//         test = document.getElementById(i);

//     }
//     if()
// })

// function checkWin() {
//     let locationP1 = [];
//     let locationP2 = [];
//     for (let i = 0; i < 9; i++) {
//         if(location1[i].player === "Player 1") {
//             locationP1.push(location1[i].position)
//         } else if(location1[i].player === "Player 2") {
//             locationP2.push(location1[i].position);
//         }
//     }
//     console.log(locationP1, locationP2);
//     }


gameBoard();

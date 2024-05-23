window.addEventListener('DOMContentLoaded', () =>{
    const tiles=Array.from(document.querySelectorAll('.tile'));
    const playerDisplay=document.querySelector('.display-player');
    const  resetButton=document.querySelector('#reset');
    const announcer=document.querySelector('.announcer');

    let board =['','','','','','','','',''];
    let currentPlayer='X';
    let isGameActive=true;

    const PLAYERX_WON='PLAYERX_WON';
    const PLAYERO_WON='PLAYERO_WON';
    const TIE='TIE';

/* index whit the board
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]*/

    const winningConditions=[
        [0,1,2], [3,4,5],[6,7,8],[0,3,6],
        [1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ];

    function handleResultValidation(){
        let roundWon=false;
        for (let i=0;i<=7;i++) {
            
        }
    }

    const announce =(type) => {
        switch(type){
            case PLAYERO_WON:
                announce.innerHTML='Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announce.innerHTML='Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announce.innerText='Tie';
        } announce.classList.remove('hide');

    }

    const changePlayer=()=>{
        playerDisplay.classList.remove('player${currentPlayer');
        currentPlayer=currentPlayer ==='X' ? 'O':'X';
        playerDisplay.innerText= currentPlayer;
        playerDisplay.classList.add('player${currentPlayer');
}

    const userAction=(tile,index)=>{
        if (isValidAction(tile) && isGameActive){
            tile.innerText=currentPlyer;
            tile.classList.add('player${currentPlayer}');
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }



})
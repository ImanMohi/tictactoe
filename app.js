let allCells=document.querySelectorAll('.square');
let currentPlayer='O';

for(let i=0;i<9;i++){
    allCells[i].addEventListener('click',(e)=>{
        if(currentPlayer==='X'){
            currentPlayer='O';
            e.target.innerHTML=currentPlayer;
        }else if(currentPlayer==='O'){
            currentPlayer='X';
            e.target.innerHTML=currentPlayer;
        }
        gameOver();
    })
}

const gameOver=()=>{
    //Conditions for Rows
    if(allCells[0].innerHTML==='X'&&allCells[1].innerHTML==='X'&&allCells[2].innerHTML==='X'){
        // document.getElementById('result').innerHTML='X wins';
        alert('X wins')
    }else if(allCells[3].innerHTML==='X'&&allCells[4].innerHTML==='X'&&allCells[5].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[6].innerHTML==='X'&&allCells[7].innerHTML==='X'&&allCells[8].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[0].innerHTML==='O'&&allCells[1].innerHTML==='O'&&allCells[2].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[3].innerHTML==='O'&&allCells[4].innerHTML==='O'&&allCells[5].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[6].innerHTML==='O'&&allCells[7].innerHTML==='O'&&allCells[8].innerHTML==='O'){
        alert('O wins');
    }
    //Conditions for Columns
    else if(allCells[0].innerHTML==='X'&&allCells[3].innerHTML==='X'&&allCells[6].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[1].innerHTML==='X'&&allCells[4].innerHTML==='X'&&allCells[7].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[2].innerHTML==='X'&&allCells[4].innerHTML==='X'&&allCells[8].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[0].innerHTML==='O'&&allCells[3].innerHTML==='O'&&allCells[6].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[1].innerHTML==='O'&&allCells[4].innerHTML==='O'&&allCells[7].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[2].innerHTML==='O'&&allCells[5].innerHTML==='O'&&allCells[8].innerHTML==='O'){
        alert('O wins');
    }
    //Diagonal Conditions
    else if(allCells[0].innerHTML==='O'&&allCells[4].innerHTML==='O'&&allCells[8].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[0].innerHTML==='X'&&allCells[4].innerHTML==='X'&&allCells[8].innerHTML==='X'){
        alert('X wins');
    }else if(allCells[2].innerHTML==='O'&&allCells[4].innerHTML==='O'&&allCells[6].innerHTML==='O'){
        alert('O wins');
    }else if(allCells[2].innerHTML==='O'&&allCells[4].innerHTML==='O'&&allCells[6].innerHTML==='O'){
        alert('X wins');
    }
}

document.getElementById('refreshbtn').addEventListener('click',()=>{
    for(let i=0;i<9;i++){
        allCells[i].innerHTML=" ";
    }
    currentPlayer='O';
})
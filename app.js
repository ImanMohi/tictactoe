let turnCount = 0;

function startGame()
{
    turnCount = 0;

    for(let i=0; i<=9; i++)
    {
        clearBox(i);
        //set refreshbtn visibility to hidden
        document.getElementById('refreshbtn').style.visibilty = 'hidden';
    }
}

//Reset for another game
function clearBox(number) {
    document.getElementById('square' + number).innerText = ''; 
}

function getVal(number)
{
    return document.getElementById('square' + number).innerText;
}

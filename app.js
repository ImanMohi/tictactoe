let cells = document.querySelectorAll('div.row > div');

for (let i=0; i< cells.length; i++)
{
    if (i%2===0)
    {
        cells[i].addEventListener('click', cellClickedcross);
    }
    else
    {
        cells[i].addEventListener('click', cellClickedzero);
    }
}

function cellClickedcross()
{
    event.target.textContent = 'X';
}

function cellClickedzero()
{
    event.target.textContent = 'O';
}
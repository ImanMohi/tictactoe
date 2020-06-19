let cells = document.querySelectorAll('div.row > div');

for (let i=0; i< cells.length; i++)
{
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked()
{
    for (let i=0; i<10; i++)
    {
        if(i%2==0)
        {
            event.target.textContent = 'X';
        } else {
            event.target.textContent = 'O';
        }
    }
}
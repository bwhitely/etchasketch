const cont = document.getElementById('main');

document.body.onload = makeRows(16,16);
let currentColor = 'black';
let rainbow_bool = false;

// Store current cell count in case of reset but no resize
let currCells;

// Make cells
function makeRows(rows, cols){
    cont.style.setProperty('--grid-rows', rows);
    cont.style.setProperty('--grid-cols',cols);

    for (let i = 0; i < (rows*cols); i++){
        let cell = document.createElement("div");
        cont.appendChild(cell).className = "grid-item";
    }

    // Grid creation
    let gridItem = document.getElementsByClassName("grid-item");

    for (let i = 0; i < gridItem.length; i++){
        gridItem[i].addEventListener('mouseenter', function() {
            gridItem[i].style.backgroundColor = currentColor;
            if (rainbow_bool){
                currentColor = "#" + ((1<<24)*Math.random() | 0).toString(16);
            }
        });
    }
}

// Reset button
const reset = document.getElementById('reset');
const resize = document.getElementById('resize');

resize.addEventListener('click', function () {
    let cells = prompt("How many cells in width and height? (<100)");
    while (cells >= 100){
        cells = prompt("How many cells in width and height? (<100)")
    }
    resetGrid();
    currCells = cells;
    makeRows(cells, cells);
});

reset.addEventListener('click', function() {
    resetGrid();
    makeRows(currCells, currCells);
})

// Reset grid
function resetGrid(){
    cont.innerHTML = '';
}

// Color change
const recolor = document.getElementById('recolor');

recolor.addEventListener('input', function (e) {
    currentColor = e.target.value;
});

// Rainbow color

const rainbow = document.getElementById('rainbow');

rainbow.addEventListener('click', function () {
    if (rainbow_bool){
        rainbow_bool = false;
        currentColor = 'black';
    } else {
        rainbow_bool = true;
    }
});
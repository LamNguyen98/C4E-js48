function allowDrop(event) {

    event.preventDefault();
}
function drag(event) {
    // console.log(event)
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    // console.log("drop",event)
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data))
    // console.log(this)
}

let unit = {
    move: 2,
    x: 0,
    y: 0,
}

$(".gamecell").on("drop", function (event) {
    event.preventDefault();
    event.stopPropagation();
    unit.x = this.id.split("_")[0];
    unit.y = this.id.split("_")[1];
})

let unit1 = {
    relation: "ally"
}
let unit2 = {
    relation: "enemy"
}

let upperBoard = ["", "", unit1, unit2, "", unit1, "", "", "", ""]
let lowerBoard = ["", "", "", "", "", "", "", "", "", ""]

function setUp() {
    console.log(unit.x, unit.y)
    let current = unit.x.valueOf()

    if (unit.y == 1) {
        upperBoard[current] = unit
        console.log(upperBoard)
    }
    else if (unit.y == 2) {
        lowerBoard[current] = unit
        console.log(lowerBoard)
    }
}

function movement(board, unit) {
    let currentLocation = board.indexOf(unit)
    let finalLocation = currentLocation
    for (i = 1; i <= unit.move; i++) {
        let location1 = Number(currentLocation) + Number(i)
        if (board[location1].relation == "ally") { }
        else if (board[location1].relation == "enemy") { return }
        else { finalLocation = location1 }
    }
    board[currentLocation] = ""
    board[finalLocation] = unit
    console.log(board)
}

function attack(board, unit, maxLocation) {
    for (j = 1; j <= unit.atkRange; j++) {
        let enemyLocation = unit.x + j
        if (board[enemyLocation].relation == "enemy") {
            board[enemyLocation].hp -= unit.atk
            if (board[enemyLocation].hp < 1 && enemyLocation <= maxLocation) { unit.x = enemyLocation }
            break
        }
    }
}

function endturn() {
    movement(upperBoard, unit);
    // attack(upperBoard, unit);
}

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
    atk: 5,
    move: 2,
    atkRange: 2,
    x: 0,
    y: 0,
    isAttack: "no"
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
    relation: "enemy",
    hp: 5
}
let unit3 = {
    relation: "enemy",
    hp: 8
}

let upperBoard = ["", "", "", unit2, unit3, unit1, "", "", "", ""]
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
    var maxLocation = board.indexOf(unit) + unit.move
    console.log(maxLocation)
    for (i = 1; i <= unit.move; i++) {
        let location1 = Number(currentLocation) + Number(i)
        if (board[location1].relation == "ally") { }
        else if (board[location1].relation == "enemy") {
            attack(board, unit)
            if (board[location1] == "" && location1 <= maxLocation) {
                finalLocation = location1
            }
        }
        else { finalLocation = location1 }
    }
    board[currentLocation] = ""
    board[finalLocation] = unit
    attack(board, unit)
}


function attack(board, unit) {
    if (unit.isAttack == "no") {
        let currentLocation = board.indexOf(unit)
        for (j = 1; j <= unit.atkRange; j++) {
            let enemyLocation = Number(currentLocation) + Number(j)
            console.log(enemyLocation)
            if (board[enemyLocation].relation == "enemy") {
                board[enemyLocation].hp -= unit.atk
                if (board[enemyLocation].hp < 1) {
                    board[enemyLocation] = "";
                }
                unit.isAttack = "yes"
                break
            }
        }
    }
    else { }
}
function endturn() {
    movement(upperBoard, unit);
    update()
    console.log(upperBoard)
}

function update() {
    let newCell = upperBoard.indexOf(unit) + "_1"
    let newUnit = document.getElementById("img2")
    let cell = document.getElementById(newCell)
    cell.appendChild(newUnit)
}
function reset() {
    unit.isAttack = "no"
}


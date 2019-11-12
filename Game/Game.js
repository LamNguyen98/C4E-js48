let unit = {
    atk: 5,
    move: 2,
    atkRange: 2,
    x: 0,
    y: 0,
    isAttack: "no",
    img: "img1"
}
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

let Player1 = { relation: "player", hp: 20 }
let Player2 = { relation: "player", hp: 20 }

let upperBoard = [Player1, "", "", "", "", "", "", "", "", "", "", Player2]
let lowerBoard = [Player1, "", "", "", "", "", "", "", "", "", "", Player2]

function assign(event) {
    console.log(event)
}


// $(".gamecell").on("drop", function (event) {
//     event.preventDefault();
//     event.stopPropagation();
//     unit.x = this.id.split("_")[0];
//     unit.y = this.id.split("_")[1];
// })

function setUp() {
    let current = unit.x.valueOf()
    if (unit.y == 1) {
        upperBoard[current] = unit
    }
    else if (unit.y == 2) {
        lowerBoard[current] = unit
    }
    console.log(upperBoard)
    console.log(lowerBoard)
}

function movement(board, unit) {
    let currentLocation = board.indexOf(unit)
    let finalLocation = currentLocation
    var maxLocation = board.indexOf(unit) + unit.move
    console.log(maxLocation)
    for (i = 1; i <= unit.move; i++) {
        let location1 = Number(currentLocation) + Number(i)
        if (board[location1].relation === "ally") { }
        else if (board[location1].relation === "enemy") {
            attack(board, unit)
            if (board[location1] === "" && location1 <= maxLocation) {
                finalLocation = location1
            }
        }
        else if (board[location1].relation === "player") { break }
        else { finalLocation = location1 }
    }
    board[currentLocation] = ""
    board[finalLocation] = unit
    attack(board, unit)
}

function attack(board, unit) {
    if (unit.isAttack === "no") {
        let currentLocation = board.indexOf(unit)
        for (j = 1; j <= unit.atkRange; j++) {
            let enemyLocation = Number(currentLocation) + Number(j)
            console.log(enemyLocation)
            if (board[enemyLocation].relation === "enemy") {
                board[enemyLocation].hp -= unit.atk
                if (board[enemyLocation].hp < 1) {
                    board[enemyLocation] = "";
                }
                unit.isAttack = "yes"
                break
            }
            else if (board[enemyLocation].relation === "player") {
                board[enemyLocation].hp -= unit.atk
                if (board[enemyLocation].hp < 1) {
                    gameWon()
                }
                unit.isAttack = "yes"
                break
            }
        }
    }
    else { }
}

function endturn() {
    if (unit.y == 1) {
        movement(upperBoard, unit)
    }
    else if (unit.y == 2) {
        movement(lowerBoard, unit)
    }
    // update()
    console.log(upperBoard)
    console.log(lowerBoard)
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
function gameWon() {
    alert("You win")
}


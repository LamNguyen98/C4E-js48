let x = 0;
let y = 0;
let step = 20;

let unit1 = {
    class: "ally",
    atk: 3,
    hp: 4,
    move: 5,
    atkRange: 2,
    x: 1,
    y: 1
}
let unit2 = {
    class: "enemy",
    hp: 3,
    move: 4
}
let unit3 = {
    class: "ally",
    hp: 5
}
let unit4 = { class: "empty" }

let board = [unit4, unit1, unit3, unit4, unit4, unit3, unit2, unit3]

function movement(board, unit) {
    let maxLocation = unit.x
    for (i = 1; i <= unit.move; i++) {
        let location1 = board.indexOf(unit) + i
        let location0 = location1 - 1
        if (board[location1].class == "empty") {
            unit.x = location1
        }

        else if (board[location1].class == "ally") {
            unit.x = location0
        }
        else if (board[location1].class == "enemy") { attack(board, unit, maxLocation)}
    }
}
function attack(board, unit, maxLocation) {
    for (i = 1; i <= unit.atkRange; i++) {
        let enemyLocation = unit.x + i
        if (board[enemyLocation].class == "enemy") {
            board[enemyLocation].hp -= unit.atk
            if(board[enemyLocation].hp < 1 && enemyLocation <= maxLocation) {unit.x = enemyLocation}
        }
    }
}

movement(board, unit1)
console.log(unit1.x)

// attack(board, unit1)

console.log(unit1.x)
console.log("board[2]:", board[2].hp)
console.log("board[3]:", board[3].hp)

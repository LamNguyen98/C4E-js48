let x = 0;
let y = 0;
let step = 20;

let unit1 = {
    class: "ally",
    atk: 2,
    hp: 4,
    move: 5,
    atkRange: 2,
    x: 0,
    y: 0
}
let unit2 = {
    class: "enemy",
    hp: 10,
    move: 4
}
let unit3 = {
    class: "ally",
    hp: 5
}
let unit4 = { class: "empty" }

let board = [unit4, unit1, unit2, unit3, unit2, unit4, unit4, unit3]

function attack(board, unit) {
    for (i = 1; i <= unit.atkRange; i++) {
        let a = board.indexOf(unit) + i
        if (board[a].class == "enemy") {
            board[a].hp -= unit.atk
        }
    }
}
function movement(board, unit) {
    let maxLocation = unit.x + unit.move
    for (i = 1; i <= unit.move; i++) {
        let location1 = board.indexOf(unit) + i
        let location0 = location1 - 1
        if (board[location1].class == "empty" && location1 <= maxLocation) {
            unit.x = location1
        }
        else if (board[location1].class == "enemy") { return }

        else if (board[location1].class == "ally") {
            unit.x = location0
        }
    }
}

attack(board, unit1)
movement(board, unit1)

console.log(unit1.x)
console.log("board[2]:", board[2].hp)
console.log("board[3]:", board[3].hp)

function allowDrop(event) {
 
    event.preventDefault();
}
function drag(event) {
    console.log(event)
    event.dataTransfer.setData("text", event.target.id);
}
function drop(event) {
    console.log("drop",event)
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data))
    console.log(this) // (document.getElementById(data).cloneNode(true)) : clone drag
}
function dragenter (event) {
    console.log(event)
}
let unitLib = {
    A_soldier: {
        class: "ally",
        position: "1_1",
        img: "",
        type: "A_soldier",
        hp: 5,
        attack: 1,
        move: 2,
        range: 2,
    },
    E_archer: {
        class: "enemy",
        position: "10_1",
        img: "",
        type: "E_archer",
        hp: 2,
        attack: 2,
        move: 2,
        range: 3
    }
}


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
    hp: 2,
    move: 4
}

let unit3 = {
    class: "ally",
    hp: 5
}
let unit4 = { class: "empty" }

let board = [unit4, unit1, unit3, unit4, unit4, unit4, unit2, unit2]

function movement(board, unit) {
    for (i = 1; i <= unit.move; i++) {
        let location1 = board.indexOf(unit) + i
        let location0 = location1 - 1
        if (board[location1].class == "empty") {
            unit.x = location1
        }

        else if (board[location1].class == "ally") {
            unit.x = location0
        }
        else if (board[location1].class == "enemy") { return }
    }
}
function attack(board, unit, maxLocation) {
    for (j = 1; j <= unit.atkRange; j++) {
        let enemyLocation = unit.x + j
        if (board[enemyLocation].class == "enemy") {
            board[enemyLocation].hp -= unit.atk
            if (board[enemyLocation].hp < 1 && enemyLocation <= maxLocation) { unit.x = enemyLocation }
            break
        }
    }
}

function endturn() {
    move();
    attack()
}

//state: fill?
// controller : 
// parent
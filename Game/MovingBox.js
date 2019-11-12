let box = document.getElementById("box")

let box1 = getComputedStyle(box)
let boxLeft = box1.left
let boxTop = box1.top

let x = parseInt(boxLeft, 10)
let y = parseInt(boxTop, 10)
console.log(x, y)



let step = 100;
let unit = "px";

function render() {
    box.style.top = y + unit
    box.style.left = x + unit
}

function moveup() {
    y -= step
    render()
}
function movedown() {
    y += step
    render()
}
function moveleft() {
    x -= step
    render()
}
function moveright() {
    x += step
    render()
}


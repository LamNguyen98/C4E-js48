let dom = document.getElementById ("name")

console.dir(dom)

let lis = document.getElementsByClassName ("list1")

console.dir(lis)

let count = true

function toggle() {
    count = !count
    if (count == true) {
        dom.innerHTML += "<span>Hello</span>"
    }
    else {dom.innerHTML += "<span>Hi</span>"}
}

let aDemo = document.getElementById("aDemo")
function togglle() {
    count = !count
    if (count == true) {
        aDemo.innerHTML = "facebook.com";
    aDemo.setAttribute("href","https://facebook.com")
    }
    else {
        aDemo.innerHTML = "google.com";
        aDemo.setAttribute("href","https://google.com")
    }
}

let h2 = document.getElementById("heading2");
h2.remove()
// h2.outerHTML = ""

function press (params) {
    alert("haha")
}

document.addEventListener("animation", function(){
    alert("hoho")
})

let myInput = document.getElementById("my-input");
myInput.addEventListener("keypress", function () {
    console.log(myInput)
})

myInput.addEventListener("input", function (event) {
    console.log(event.target.value)
})



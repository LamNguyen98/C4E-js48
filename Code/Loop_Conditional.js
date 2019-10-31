let a = 10;
let b = 10;
let c = 11;
let d = 13;

if (a > b && a > c && a > d) { console.log(a) }
else if (b > c && b > d && b > a) { console.log(b) }
else if (c > b && c > d && c > a) { console.log(c) }
else if (d > c && d > b && d > a) { console.log(d) }
else { console.log(`khong co 1 so lon nhat`) }
//
for (i = 0; i < 5; i++) {
    let str = ``
    for (let j = 1; j <= i; j++) {
        str+= j
    }
    console.log(str)
}
// ------
let time = 1;
switch (time) {
    case 1:
        alert(`Khu vuc le tan`);
        break;
    case 2:
        alert(`Bo phan kinh doanh`);
        break;
    case 3:
        alert(`Phong giam doc`);
        break;
    default:
        alert(`Dang thi cong`)
}

//
let arr = ["Ronaldo", "Messi", "Neymar"];

let a = prompt("Nhap ten cau thu(Y or N):").toUpperCase();

if (a == "Y") {
    let b = prompt("Ten cau thu la:");
    arr.push(b);
    console.log(arr)
}
else { alert("Good bye") }
//
let a = 1;
let b = 2;
let x = 0;
if(a > b) { x = a}
else {x = b}
console.log(x)
//
let s = 0;
let n = 20;
for(i = 0; i <= n; i++) {
    s = s + i
}
console.log(s/n)

// -----------
let a = 5
// ==
console.log(a == 5)
console.log(a == "5")
// ===
console.log(a === "5")

/* or (||): find -> right
and (&&): find -> wrong      not > and > or
not (!): negative */

let b = true;
let c = false;
console.log(b && c);
console.log("string" && 1 && 0);

let username = prompt(" Tell me your name");
let password = Number(prompt(" Tell me your password"));

// If - else if - else
let user = "Dante";
let pass = 123;

if (username === user && password === pass) { alert("Success") }
else { alert("Please try again") }
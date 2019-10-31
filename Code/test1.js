// for, while, do/while

for (let i = 0; i < 10; i++) {

    if (i === 5) {
        break
    }
    console.log(i)
};
for (let i = 0; i < 10; i++) {

    if (i === 5) {
        continue
    }
    console.log(i)
};

console.log(`------------------`)

for (let i = 5; i <= 70; i++) {
    if (i % 5 === 0) {
        console.log(i)
    }
}

console.log(`------------------`)
let a = 0;
while (a < 20) {
    a++

    if (a === 13) { break }
    console.log(a)
}
console.log(`------------------`)

let b = 5;
while (b <= 70) {

    if (b % 5 === 0) {
        console.log(b)
    }
    b++
}
// Array

let arr = [1, 2, 3, 4, 5];

arr.splice(2, 2, "b")

console.log(arr)

// forEach

arr.forEach(function (element, index, arr) {
    console.log(`Element: ${element}`);
    console.log(`Index: ${index}`);
    console.log(`Array: ${arr}`)
})

// -------------
let aer = ["Nam", "Hoang", "Yen", "Hai", "Hung"];
aer.push("Hoa");
aer.splice(5, 1, "Hien");
aer.splice(5, 1);
console.log(aer)
// ---------------
let arr1 = [5, 12, 8, 130, 44];
let s = 0;
for (i = 0; i < arr1.length; i++) {
    s = s + arr1[i]
}
console.log(s)

let sum = arr1.reduce(function (acc, element) {
    return acc + element
}, 10
)
console.log(sum)
//
console.log(`---------------------`)
//
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 5 === 0) { console.log(arr1[i]) }
}

for (j = 0; j < arr1.length; j++) {
    if (arr1[j] % 10 === 4) { console.log(arr1[j]) }
}

console.log(arr1.indexOf(8));

arr1.splice(5, 1, [3, 4, 5]);
console.log(arr1)


// Loc reduce

let arr2 = [5, 3, 5, 1, 2];
let arr3 = [];
arr2.forEach(function (item) {
    if (arr3.indexOf(item) < 0) {
        arr3.push(item)
    }
}
)
console.log(arr3)


let array1 = [5, 3, 5, 1, 2];
let newarr = array1.reduce(function (acc, item) {
    if (acc.indexOf(item) < 0) {
        acc.push(item);
        return acc
    }
    return acc
}, []
)
console.log(newarr)

// Filter
let arra = arr1.filter(function (item) {
    return item % 5 === 0}
)
console.log(arra)

let arrb = arr1.find(function (item) {
    return item % 5 === 0},
)
console.log(arrb)
//
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr5 = arr4.map(function (item) {
    return item * 2
})

arr5.sort()     // auto sort theo string
arr5.sort(function (a, b) {
    return a - b
})              // theo number, b - a la nguoc lai
console.log(arr5)



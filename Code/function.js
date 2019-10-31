let a = [1, 2, 3, 4].map(function (item) {
    return item **2
})

console.log(a)

arr = [1, 2, 3, 4]
arra = []
function map2(arr) {
    for(i = 0; i < arr.length; i++) {
        b = arr[i] ** 2;
        arra.push(b)
    }
}
map2(arr)
console.log(arra)

console.log("-------------------")


function map1(arr, callback) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        let a = callback(arr[i])
        result.push(a)
    }
    return result
}
function fn(item) {
    return item * 2
}

console.log(map1(arr,fn))


function add1(a, b) {
    let result = a * b
    return result
}
function op1(a, b, fn) {
    let asw = fn(a, b)
    return asw
}

console.log(op1(6, 7, add1))

let arr = [0, 1, 2, 3, 4, 5]
function filter1(arr, callback) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (callback(item, i, arr)) {
            result.push(item)
        }
    }
    return result
}
console.log(filter1(arr, function (item) {
    return item > 2
})
)


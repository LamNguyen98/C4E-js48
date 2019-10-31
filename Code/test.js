// Object           f[key] -> obj.[key]   : dung khi key la bien

let student = {
    ten: "Abc",
    NamSinh: 1998,
    Tuoi: 21,
}

let b = prompt("Cho biet Ten")
let c = prompt("Cho biet Nam Sinh")
let d = prompt("Cho biet tuoi")
student.ten = b
student.NamSinh = c
student.Tuoi = d

let a = prompt("Ban muon them thong tin khong").toLowerCase()
if (a === "khong") {
alert("Goodbye")
}
else {student["Thong tin"] = a}


console.log(student)

// --------------------

let student = {
    ten: "Abc",
    nam: 1998,
    quoc: "VN",
    z: "a",
    x: "b",
    c: "q",
    v: 123456
}

let a = prompt("Ban co muon xoa thong tin nao khong (Y/N)").toLowerCase()
if (a === "y") {
    for (i = 0;i < 10 ; i++) {
    b = prompt("Ban muon xoa thong tin nao").toLowerCase()
    if (b === "n") {break}
    delete student[b]}
}
else {alert("Goodbye")}

console.log(student)


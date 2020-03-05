//  ASSIGNMENT 1

// Part A
let names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]
console.log("Task 1, Part A: "+ names.join(', '))
let newNames = names.filter ((name) => name.toLowerCase().includes("a"))
console.log("Task 1, Part A: "+newNames.join(', '))

// PART B
let reverseName = names.reverse()
console.log("Task 1, Part B: "+reverseName.join(', '))

let reversedNames = names.map(word => word.split("").reverse().join(""))
console.log("Task 1, Part B: "+reversedNames.join(', '))


// ASSIGNMENT 2

// PART A
function myFilter(array, callback) {
    let filterArray = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
        filterArray.push(callback(array[i]))
        }
    }
    return filterArray
}

let originalNames = myFilter(names, function (name) {
    return name.toLowerCase().includes("a")
})
console.log("Task 2, Part A: "+originalNames)


// PART B
function myMap(array, callback) {
    let mapArray = []
    for (let i = 0; i < array.length; i++) {
        mapArray.push(callback(array[i]))
    }
    return mapArray
}

function nameBackwards(rName) {
    return rName.split("").reverse().join("")
}
console.log("Task 2, Part B: "+myMap(names, nameBackwards))


// ASSIGNMENT 4

// PART A
let numbers = [1, 3, 5, 10, 11]
let myArray = function (f, index, array) {
    if (index + 1 < array.length) {
        return f + numbers[index + 1]
    } else {
        return f
    }
}
let result = numbers.map(myArray)
console.log("Task 4, Part A: "+result)

// PART B
let nameMap = names.map(function(person) {
    return "<a href=””>" + person + "</a>"
}).join("")
console.log("Task 4, Part B: "+nameMap)

// PART C
let namePhone = [{ name: "Lars", phone: "1234567" }, { name: "Peter", phone: "675843" },
{ name: "Jan", phone: "98547" }, { name: "Bo", phone: "79345" }, { name: "Anders", phone: "88888" }]

function insertInTable(elementObj) {
    let tableHead = "<tr><th>Name</th>" + "<th>Phone</th></tr>"
    let htmlRows = "<tr>"
    elementObj.forEach(e => {
        let temp = Object.values(e).map(function(a) {
            return "<td>" + a + "</td>"
        }).join("") + "</tr>"
        htmlRows += temp
    })
    return "<table border='1'>" + tableHead + htmlRows + "</table>"
}
console.log(insertInTable(namePhone))


// ASSIGNMENT 5

// PART A
let all = ["Lars", "Peter", "Jan", "Bo"]
console.log("Task 5, Part A: "+all.join())
console.log("Task 5, Part A: "+all.join(" "))
console.log("Task 5, Part A: "+all.join("#"))

// PART B
let numbersAssign5 = [2, 3, 67, 33]

function reducer(amount, number) {
    return amount + number
}
console.log("Task 5, Part B: "+numbersAssign5.reduce(reducer))
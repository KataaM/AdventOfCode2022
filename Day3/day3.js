

const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\r?\n/);

// Split by half size
// Get common letter on each side

// use ASCII for points
// 97 -> a -- 122 -> z
// 65 -> A -- 90 -> Z

// a = 1 & z = 26
// A = 27 & Z = 52

// between 97 & 122 ==> -96
// between 65 & 90 ==> -38

let total = 0

parsedDataset.forEach(line => {
    console.log(line.length)
    let halfSize = (line.length) /2
    let firstPart = line.substring(0,halfSize)
    let secondPart = line.substring(halfSize)

    for (const firstPartChar of firstPart) {
        if (secondPart.includes(firstPartChar)) {
            console.log("Includes letter : " + firstPartChar + " in : " + firstPart + " secondPart : " + secondPart)
            console.log("Ascii value :  " + firstPartChar.charCodeAt(0))
            console.log("Total before " + total)


            total -= (97 <= firstPartChar.charCodeAt(0) && firstPartChar.charCodeAt(0) <= 122) ? 96 : 38
            console.log("Total after minus " + total)

            total += firstPartChar.charCodeAt(0)
            console.log("Total after " + total)
            break
        }
    }
})

console.log("Total part 1 : " + total)

// part 2
console.log("============")

let totalpart2 = 0
let array=[]
parsedDataset.forEach(line => {
    console.log("Line:  " + line)
    array.push(line)
    console.log("Array size after push: " + array.length)

    if (array.length === 3) {
        totalpart2+=getCommonLetter(array)
        array=[]
        console.log("New total : " + totalpart2)
    }
})

function getCommonLetter(arrayString) {

    let line1 = arrayString[0]
    let line2 = arrayString[1]
    let line3 = arrayString[2]

    console.log("ArrayString : "  + arrayString)

    for (const char of line1) {

        let line2Contains = false
        let line3Contains = false

        if (line2.includes(char))  {
            line2Contains = true
        }
        if (line3.includes(char)) {
            line3Contains = true
        }

        if (line2Contains && line3Contains) {
            let commonLetterValue = 0
            const priority_a='a'.charCodeAt(0) - 1
            const priority_A='A'.charCodeAt(0) - 27
            console.log("Includes letter : " + char )
            console.log("Ascii value :  " + char.charCodeAt(0))
            console.log("Total before " + commonLetterValue)
            commonLetterValue -= ('a'.charCodeAt(0) <= char.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ? priority_a : priority_A
            commonLetterValue += char.charCodeAt(0)
            console.log("Total after " + commonLetterValue)
            return commonLetterValue
        }
    }
}

console.log("Total part 2 : " + totalpart2)
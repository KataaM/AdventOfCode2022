const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

// PART 1 AND 2
let finalAnswer = 0
let numberOfCharDifferent = 4
part1and2(numberOfCharDifferent)
numberOfCharDifferent = 14
part1and2(numberOfCharDifferent)

function part1and2(markerLength) {

    parsedDataset.forEach(line => {
        let charArray= []
        let index = 0

        for (const char of line) {
            if (charArray.length !== markerLength) {
                charArray.push(char)
            }else {
                if (arrayIncludes(charArray)) {
                    charArray.shift()
                    charArray.push(char)
                }else {
                    finalAnswer = index
                    break
                }
            }
            index++
        }
        console.log("Final answer : " + finalAnswer)
    })
}

function arrayIncludes(array){
    let copyOfArray = [...array]
    for (let i = 0; i < array.length-1; i++) {
        copyOfArray.splice(i,1)
        if (copyOfArray.includes(array[i])) {
            return true
        }
        copyOfArray = [...array]
    }
    return false
}

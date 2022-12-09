const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\r?\n/);

// PART 1

let numberOfPairs = 0
let array = []
parsedDataset.forEach(line => {

    array = line.split(',')
    numberOfPairs += isFullyContained(array[0].split('-'),array[1].split('-'))
    array = []
})

console.log("Total part 1 : " + numberOfPairs)

function isFullyContained(firstPart,secondpart) {
    console.log("isFullyContained()")
    console.log(firstPart)
    console.log(secondpart)

    const firstPartFirstValue = parseInt(firstPart[0],10)
    const firstPartSecondValue =parseInt(firstPart[1],10)
    const secondPartFirstValue =parseInt(secondpart[0],10)
    const secondPartSecondValue =parseInt(secondpart[1],10)

    if (firstPartFirstValue <= secondPartFirstValue && firstPartSecondValue >= secondPartSecondValue) {
        return true
    } else if (secondPartFirstValue <= firstPartFirstValue && secondPartSecondValue >= firstPartSecondValue){
        return true
    }
    return false
}

//PART 2

let numberOfPairsOverlapped = 0
let array2 = []
parsedDataset.forEach(line => {
    array2 = line.split(',')
    numberOfPairsOverlapped += isOverlapped(array2[0].split('-'),array2[1].split('-'))
    array2 = []
})

console.log("Total part 2 : " + numberOfPairsOverlapped)

function isOverlapped(firstPart,secondpart) {
    console.log("isOverlapped()")
    console.log(firstPart)
    console.log(secondpart)

    const firstPartFirstValue = parseInt(firstPart[0],10)
    const firstPartSecondValue =parseInt(firstPart[1],10)
    const secondPartFirstValue =parseInt(secondpart[0],10)
    const secondPartSecondValue =parseInt(secondpart[1],10)

    if (secondPartFirstValue <= firstPartFirstValue  &&  firstPartFirstValue<= secondPartSecondValue) {
        return true
    } else if (secondPartFirstValue <= firstPartSecondValue && firstPartFirstValue<= secondPartSecondValue) {
        return true
    } else if (firstPartFirstValue <= secondPartFirstValue && secondPartFirstValue <= firstPartSecondValue) {
        return true
    } else if (firstPartFirstValue <= secondPartSecondValue && secondPartFirstValue<= firstPartSecondValue) {
        return true
    }
    return false
}
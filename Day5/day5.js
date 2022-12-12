const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

// PART 1
let finalAnswer = ""
part1()

function part1() {
    //Map columnIndex array
    let mapCrates = new Map()

    parsedDataset.forEach(line => {

        const regex = new RegExp(/.*\[[A-Z]]*/);

        if (regex.test(line)) {
            // console.log(line + " Matched : " + regex.test(line))

            let indexChar =0
            let columnIndex = 1
            for (const char of line) {
                indexChar++;
                if (" " === char) {
                    if (indexChar % 4 === 0) {
                        columnIndex++
                    }
                } else if ( "[" !== char && "]" !== char){
                    // console.log("Column index : " +columnIndex + " Char : " + char)
                    if (mapCrates.has(columnIndex)) {
                        let stackedChar = mapCrates.get(columnIndex)
                        stackedChar.push(char)
                        mapCrates.set(columnIndex, stackedChar)
                    }else {
                        let stackedChar = [char]
                        mapCrates.set(columnIndex, stackedChar)
                    }
                }
            }
            // console.log(mapCrates)
        } else if(line.startsWith("move")) {
            let lineSplitted = line.split(" ")

            let moveFrom = parseInt(lineSplitted[3],10)
            let moveTo = parseInt(lineSplitted[5],10)
            let amountToMove = parseInt(lineSplitted[1],10)

            // console.log("moveFrom : "  + moveFrom)
            // console.log("moveTo : "  + moveTo)
            // console.log("amountToMove : "  + amountToMove)
            // console.log(mapCrates)
            for (let i = 0; i < amountToMove; i++) {
                let moveFromArray = mapCrates.get(moveFrom)
                let moveToArray = mapCrates.get(moveTo)
                // console.log("moveFromArray : "  + moveFromArray)
                // console.log("moveToArray : "  + moveToArray)

                moveToArray.unshift(moveFromArray[0])
                moveFromArray.shift()

                mapCrates.set(moveFrom, moveFromArray)
                mapCrates.set(moveTo, moveToArray)
            }
            // console.log(mapCrates)
        }
    })
    // console.log(mapCrates)

    const sortedMap = new Map([...mapCrates].sort((a, b) => a[0] - b[0]));
    sortedMap.forEach(logMapElements)
}


function logMapElements(value, key, map) {
    // console.log(`m[${key}] = ${value[0]}`);
    finalAnswer += value[0]
}
console.log("Final answer part 1 : " + finalAnswer)

// PART 2
let finalAnswerPart2 = ""
part2()

function part2() {
    //Map columnIndex array
    let mapCrates = new Map()

    parsedDataset.forEach(line => {

        // array = line.split(',')
        // numberOfPairs += isFullyContained(array[0].split('-'),array[1].split('-'))
        // array = []
        const regex = new RegExp(/.*\[[A-Z]]*/);

        if (regex.test(line)) {
            // console.log(line + " Matched : " + regex.test(line))

            let indexChar =0
            let columnIndex = 1
            for (const char of line) {
                indexChar++;
                if (" " === char) {
                    if (indexChar % 4 === 0) {
                        columnIndex++
                    }
                } else if ( "[" !== char && "]" !== char){
                    // console.log("Column index : " +columnIndex + " Char : " + char)
                    if (mapCrates.has(columnIndex)) {
                        let stackedChar = mapCrates.get(columnIndex)
                        stackedChar.push(char)
                        mapCrates.set(columnIndex, stackedChar)
                    }else {
                        let stackedChar = [char]
                        mapCrates.set(columnIndex, stackedChar)
                    }
                }
            }
            // console.log(mapCrates)
        } else if(line.startsWith("move")) {

            let lineSplitted = line.split(" ")

            let moveFrom = parseInt(lineSplitted[3],10)
            let moveTo = parseInt(lineSplitted[5],10)
            let amountToMove = parseInt(lineSplitted[1],10)

            // console.log("moveFrom : "  + moveFrom)
            // console.log("moveTo : "  + moveTo)
            // console.log("amountToMove : "  + amountToMove)
            // console.log(mapCrates)

            // If amounttoMove > 1
            // Retain order
            // Concat array ?

            let arrayToConcat = []
            let moveFromArray = mapCrates.get(moveFrom)
            let moveToArray = mapCrates.get(moveTo)
            // console.log("arrayToConcat")


            for (let i = 0; i < amountToMove; i++) {
                // console.log("moveFromArray : "  + moveFromArray)
                // console.log("moveToArray : "  + moveToArray)
                arrayToConcat.push(moveFromArray[0])

                // moveToArray.unshift(moveFromArray[0])
                moveFromArray.shift()

                mapCrates.set(moveFrom, moveFromArray)
            }
            // console.log(arrayToConcat)
            arrayToConcat = arrayToConcat.concat(moveToArray)
            mapCrates.set(moveTo, arrayToConcat)
            // console.log(mapCrates)
        }
    })
    // console.log(mapCrates)

    const sortedMap = new Map([...mapCrates].sort((a, b) => a[0] - b[0]));
    sortedMap.forEach(logMapElementsPart2)
}


function logMapElementsPart2(value, key, map) {
    // console.log(`m[${key}] = ${value[0]}`);
    finalAnswerPart2 += value[0]
}
console.log("Final answer part 2 : " + finalAnswerPart2)
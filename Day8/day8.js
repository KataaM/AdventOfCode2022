const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

// PART 1
let finalAnswerPart1 = 0
// part1()

part1()

function part1() {

    let treeArray=[]

    parsedDataset.forEach(line => {
        let lineSplitted = line.split("")
        treeArray.push(lineSplitted)
    })
    console.log(treeArray)

    let transposedArray = treeArray[0].map((_, colIndex) => treeArray.map(row => row[colIndex]));
    console.log(transposedArray)


    let onEdge = treeArray.length *4 -4
    console.log("On edge " + onEdge)
    let visibleTreeTotal = onEdge
    for (let rowIndex = 1; rowIndex < treeArray.length-1; rowIndex++) {
        for (let columnIndex = 1; columnIndex < treeArray.length-1; columnIndex++) {
            // console.log("Current value " + treeArray[rowIndex][columnIndex])
            // console.log("Current rowIndex " + rowIndex)
            // console.log("Current columnIndex " + columnIndex)

            // console.log("Returned parseRow value " + parseRow(treeArray[rowIndex],columnIndex))

            //TODO Parse col
            // console.log("Returned parseCOL value " + parseRow(transposedArray[columnIndex],rowIndex))

            if(parseRow(treeArray[rowIndex],columnIndex) || parseRow(transposedArray[columnIndex],rowIndex)) {
                visibleTreeTotal++
            }

        }
    }

    console.log("VisibleTreetotal " + visibleTreeTotal)
}

function parseRow(rowArray,columIndex) {
    let value = rowArray[columIndex]
    let right = true
    let left = true

    // console.log(rowArray)
    // console.log("Column index " + columIndex)

    for (let colIndex = columIndex+1; colIndex < rowArray.length; colIndex++) {
        if (rowArray[colIndex] >= value) {
            right = false
        }
    }

    for (let colIndex = columIndex-1; colIndex >= 0; colIndex--) {
        if (rowArray[colIndex] >= value) {
            left = false
        }
    }

    return right || left
}

function parseCol(){}



//First guess 905276 wrong too low
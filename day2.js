
// Step 1 -> récupérer dataset
const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\r?\n/);

//1 for X
//2 For Y
//3 for Z

//Lost ==> 0
// draw (equal) ==> 3
// win ==> 6

const firstCol = {
    A : "Rock",
    B: "Paper",
    C: "Scissors"
}

const secondCol = {
    X : "Rock",
    Y: "Paper",
    Z: "Scissors"
}

const shapeSelectedPoint = {
    Rock: 1,
    Paper: 2,
    Scissors: 3
}

const outcomeRound = {
    Lose: 0,
    Draw: 3,
    Win: 6
}

// Rock win scissors
// Scissors win paper
// Paper win rock

function winCond(firstColValue,secondColValue) {

    let total = 0

    if (firstColValue === secondColValue) {
        total += outcomeRound.Draw
    }else if ((secondColValue === secondCol.Z && firstColValue === firstCol.B) || (secondColValue === secondCol.Y && firstColValue === firstCol.A) || (secondColValue === secondCol.X && firstColValue === firstCol.C)) {
        total+=outcomeRound.Win
    }else {
        total+= outcomeRound.Lose
    }

    return total
}

let total = 0

parsedDataset.forEach(line => {
    // console.log(line)
    const splittedArray = line.split(" ");
    let firstColumn = splittedArray[0]
    let secondColumn = splittedArray[1]
    let firstColValue = firstCol[firstColumn]
    let secondColValue = secondCol[secondColumn]
    let shape = shapeSelectedPoint[secondColValue]

    total += shape

    console.log(firstColValue + " VS " + secondColValue)
    console.log("TOTAL SCORED : " + winCond(firstColValue,secondColValue) + " + SHAPE " + shape)

    total += winCond(firstColValue,secondColValue)

    console.log("TOTAL : " + total)

    /*let firstColumnvalue = Object.keys(firstCol).find(key => firstCol[key] === firstColumn)
    let secondColumnvalue = Object.keys(secondCol).find(key => key === secondColumn)

    console.log("firstColumn " + firstColumnvalue)
    console.log("secondColumn " + secondColumnvalue)*/
})





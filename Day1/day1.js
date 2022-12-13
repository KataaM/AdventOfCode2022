
// Step 1 -> récupérer dataset
const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\r?\n/);

let currentTotal = 0
allTotalArray = []

parsedDataset.forEach(line => {
    if (line != "") {
        currentTotal += parseInt(line)
    } else {
        allTotalArray.push(currentTotal)
        currentTotal = 0
    }
});

console.log("Max : " + Math.max(...allTotalArray))
let top3Array = []
for (let index = 1; index <= 3; index++) {
    let max = Math.max(...allTotalArray)
    top3Array.push(max)
    allTotalArray.splice(allTotalArray.indexOf(max), 1)
}

console.log("Top 3 array : " + top3Array)

const summ = top3Array.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log("Sum top 3 :" + summ)
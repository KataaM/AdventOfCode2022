
// Step 1 -> récupérer dataset
const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\r?\n/);



console.log("test" + parsedDataset)


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

parsedDataset.forEach(line => {
    console.log(line)
})





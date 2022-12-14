const sourceFile = "example.txt";
const fs = require('fs');
const { json } = require('stream/consumers');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

// PART 1
let finalAnswerPart1 = 0
// part1()

part1Refactor()

function part1Refactor() {
    const map = new Map()
    let path =["/"]

    parsedDataset.forEach(line => {
        console.log("")
        let lineSplitted = line.split(" ")

        if (new RegExp(/\$.*cd/).test(line)) {
            let cdValue = lineSplitted[2].trim()
            if (cdValue === "..")  {
                console.log("path pop")
                path.pop()
            } else if(cdValue !== "/"){
                path.push(cdValue)
                console.log("path push : " + path)
            } else {
                path = ["/"]
            }
        } else if (!(new RegExp(/\$.*ls/).test(line))) {
            if (lineSplitted [0] !== "dir") {
                let value = parseInt(lineSplitted[0],10)
                if (map.has(path)) {
                    console.log(map)
                    console.log(map.get(path))

                    let size = map.get(path)
                    map.set(path,value+parseInt(size,10))
                    console.log(map)

                }else {
                    console.log("Path : " + path )
                    console.log("Value : " + value)
                    map.set(path,value)
                }
            }
        }

    })

    console.log("Final map :  ")
    console.log(map)
}



function part1() {

    let finalJson = {}
    let goto = ""
    parsedDataset.forEach(line => {

        let temporaryJson = {}

        if (new RegExp(/\$.*cd/).test(line)) {

            let lineArray = line.split(" ")
            goto = lineArray[2].trim()


            console.log("GOTO : " + goto)


            if (goto !== "/") {
                Object.keys(finalJson).forEach(function (key) {
                    let value = finalJson[key]
                    if (key === goto) {
                        console.log("GOTO INSIDE : " + goto)
                        temporaryJson = value
                    }
                });
            }

        } else if (!(new RegExp(/\$.*ls/).test(line))) {
            //Create dir and file
            // console.log("not ls " + line)
            let lineArray = line.split(" ")
            let objName = lineArray[1].trim()
            let sizeOrDir = lineArray[0].trim()

            if (sizeOrDir === "dir") {
                // json.directory.push(lineArray[1] : {})
                temporaryJson[objName] = {}
            } else {
                temporaryJson[objName] = sizeOrDir
                // json.directory.push({ objName: sizeOrDir })
            }
        }

        if (goto === "/") {

            Object.keys(temporaryJson).forEach(function (key) {
                let value = temporaryJson[key]
                finalJson[key] = value
            })
        } else {

            console.log(JSON.stringify(temporaryJson, null, 2))

            Object.keys(finalJson).forEach(function (key) {
                let value = finalJson[key]

                if (key === goto) {

                    Object.keys(temporaryJson).forEach(function (keyTemporaryJson) {
                        let value = temporaryJson[keyTemporaryJson]
                        finalJson[keyTemporaryJson] = value
                    })
                }
            })
        }
    })
    console.log(JSON.stringify(finalJson, null, 2))
}

// PART 2

function part2() {

}

function part1and2(markerLength) {

    parsedDataset.forEach(line => {
        let charArray = []
        let index = 0

        for (const char of line) {
            if (charArray.length !== markerLength) {
                charArray.push(char)
            } else {
                if (arrayIncludes(charArray)) {
                    charArray.shift()
                    charArray.push(char)
                } else {
                    finalAnswer = index
                    break
                }
            }
            index++
        }
        console.log("Final answer : " + finalAnswer)
    })
}

function arrayIncludes(array) {
    let copyOfArray = [...array]
    for (let i = 0; i < array.length - 1; i++) {
        copyOfArray.splice(i, 1)
        if (copyOfArray.includes(array[i])) {
            return true
        }
        copyOfArray = [...array]
    }
    return false
}
const sourceFile = "input.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

// PART 1
let finalAnswerPart1 = 0
// part1()

part1Refactor()

function part1Refactor() {
    const map = new Map()
    let path ="/"

    parsedDataset.forEach(line => {
        console.log("")
        let lineSplitted = line.split(" ")

        if (new RegExp(/\$.*cd/).test(line)) {
            let cdValue = lineSplitted[2].trim()
            if (cdValue === "..")  {
                // console.log("path pop")
                // path.pop()
                path = path.slice(0,-2)
            } else if(cdValue !== "/"){
                path += cdValue + "/"
                // path.push(cdValue)
                // console.log("path push : " + path)
            } else {
                path ="/"
                // path = ["/"]
            }
        } else if (!(new RegExp(/\$.*ls/).test(line))) {
            if (lineSplitted [0] !== "dir") {
                let value = parseInt(lineSplitted[0],10)
                if (map.has(path)) {
                    // console.log(map)
                    // console.log(map.get(path))
                    let size = map.get(path)
                    // console.log("Path : " + path.toString)
                    map.set(path,value+parseInt(size,10))
                    // console.log(map)

                }else {
                    // console.log("Path : " + path )
                    // console.log("Value : " + value)
                    map.set(path,value)
                }
            }
        }

    })

    console.log("map before adding each other")
    console.log(map)

    const finalMap = new Map(map)
    const finalFinalMap = new Map()
    map.forEach((value, key, map) => {

        // console.log("KEY MAP 1 : " + key)
        // console.log("VALUE MAP 1 : " + value)

        let valueToAdd = value
        finalMap.forEach((finalMapValue, finalMapKey, finalMapMap) => {
            if (!(key === finalMapKey)) {
                

                if (finalMapKey.toString().includes(key)){
                    console.log("Directory 1 : " + key )
                    console.log("Directory 2 : " + finalMapKey )
                    console.log("directory 2 is in directory 1")
                    console.log("valueToAdd : " + valueToAdd)

                    valueToAdd += finalMapValue
                }else {

                }
            }else {
                // console.log("Key 1 equals Key 2 " + finalMapKey)
            }
        })


        finalFinalMap.set(key,valueToAdd)
    })
    
    // console.log("") 
    // console.log("finalFinalMap") 
    // console.log(finalFinalMap) 



    // console.log("") 
    let totalpart1 = 0
    finalFinalMap.forEach((value, key, map) => {
        console.log(`key[${key}] = ${value}`);
        if (parseInt(value,10) <= 100000){
            totalpart1+= parseInt(value,10)
            // console.log(`key[${key}] = ${value}`);
        }
    })

    console.log("Total part 1 : " + totalpart1)
}

//First guess 905276 wrong too low
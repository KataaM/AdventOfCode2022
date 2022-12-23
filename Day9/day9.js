const sourceFile = "example.txt";
const fs = require('fs');
const dataset = fs.readFileSync(sourceFile, 'utf8');
const parsedDataset = dataset.split(/\n/);

headposx = 11
headposy = 11
tailposx = 10
tailposy = 13

console.log(isHeadCloseToTail(headposx,headposy,tailposx,tailposy))

// PART 1
part1()

function part1() {

    const map = new Map()

    let ropeBridge = []
    let max = 0

    parsedDataset.forEach(line => {
        let lineSplitted = line.split(" ")
        if (map.has(lineSplitted[0])) {
            let count = map.get(lineSplitted[0])
            map.set(lineSplitted[0],parseInt(count,10)+parseInt(lineSplitted[1],10))
            if(parseInt(count,10)+parseInt(lineSplitted[1],10) > max) {
                max = parseInt(count,10)+parseInt(lineSplitted[1],10)
            }
        }else {
            map.set(lineSplitted[0],parseInt(lineSplitted[1],10))
            if (parseInt(lineSplitted[1]) > max) {
                max = parseInt(lineSplitted[1])
            }
        }
    })

    console.log(map)
    console.log(max)
    for (let i = 0; i < (1+max)*2; i++) {
        ropeBridge.push(Array((1+max)*2).fill("."))
    }

    ropeBridge[max][max] = "s"
    console.table(ropeBridge)
    let headPosX = max
    let headPosY = max
    let tailPosX = max
    let tailPosY = max

    parsedDataset.forEach(line => {
        let lineSplitted = line.split(" ")

        let direction =lineSplitted[0]
        let mooveAmount =lineSplitted[1]

        for (let i = 0; i < mooveAmount; i++) {
            ropeBridge[headPosY][headPosX] = "."

            if (direction === "R") {
                headPosX++
            }else if (direction === "L") {
                headPosX--
            } else if (direction === "U") {
                headPosY++
            } else {
                headPosY--
            }

            ropeBridge[headPosY][headPosX] = "H"
            console.table(ropeBridge)

            console.log(isHeadCloseToTail(headPosX,headPosY,tailPosX,tailPosY))
        }
    })
}

function isHeadCloseToTail(headPosX,headPosY,tailPosX,tailPosY){
    return (Math.abs(tailPosY - headPosY) <= 1 && Math.abs(tailPosX-headPosX) <= 1 )
}
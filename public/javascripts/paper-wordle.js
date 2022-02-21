module.exports = function (sol1, sol2) {
    let grids = []
    let greenTileNumbers = []
    let yellowTileNumbers = []
    let numbers = []
    let randomNumbersCopy = []
    let guessGrid = []  // tells user where to look in clueGrid
    let clueGrid = []   // tells user whether guess is in solution
    let letters = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 50; i < 240; i++) {
        numbers.push(i)
    }

    let randomNumbers = Array.from(numbers.sort((a, b) => 0.5 - Math.random()))

    // populate guessGrid with random numbers
    for (i = 0; i < 26; i++) {
        guessGrid.push([])
        guessGrid[i].push(letters[i].toUpperCase())
        for (j = 0; j < 5; j++) {
            guessGrid[i].push(randomNumbers.pop())
        }
    }
    grids.push(guessGrid)

    for (let solution of [sol1, sol2]) {
        // assign tile colors
        clueGrid = []
        greenTileNumbers = []
        yellowTileNumbers = []
        randomNumbersCopy = Array.from(randomNumbers)
        for (let letter = 0; letter < solution.length; letter++) {
            let row = letters.indexOf(solution[letter])
            for (let value = 0; value < 5; value++) {
                if (letter == value) {
                    greenTileNumbers.push(guessGrid[row][value + 1])
                } else {
                    yellowTileNumbers.push(guessGrid[row][value + 1])
                }
            }
        }

        // get rid of duplicates 
        for (value of greenTileNumbers) {
            while (yellowTileNumbers.includes(value)) {
                yellowTileNumbers.pop(yellowTileNumbers.indexOf(value))
            }
        }

        // find green and yellow numbers from guessGrid and populate clueGrid
        for (let value of greenTileNumbers) {
            clueGrid.push([value, 'G'])
        }
        for (let value of yellowTileNumbers) {
            clueGrid.push([value, 'Y'])
        }

        while (clueGrid.length < 44) {
            let value = randomNumbersCopy.pop(randomNumbersCopy.indexOf(randomNumbersCopy[Math.floor(Math.random() * randomNumbersCopy.length)]))
            if (yellowTileNumbers.includes(value) == false && greenTileNumbers.includes(value) == false) {
                clueGrid.push([value, Math.random() >= 0.5 ? "G" : "Y"])
            }
        }
        clueGrid.sort(function (a, b) {
            return (a[0] - b[0])
        });
        grids.push(clueGrid)
    }
    return grids

}
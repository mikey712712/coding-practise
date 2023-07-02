const sudoku = (grid) => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	let linesX = grid
	const linesY = []
	const squares = []

	for (let i = 0; i < 9; i++) {
		const yLine = []
		for (let j = 0; j < 9; j++) {
			yLine.push(grid[j][i])
		}
		linesY.push(yLine)
	}

	for (let l = 0; l < 9; l += 3) {
		for (let k = 0; k < 9; k += 3) {
			const square = []
			for (let i = l; i < l + 3; i++) {
				for (let j = k; j < k + 3; j++) {
					if (grid[i][j] !== 0) {
						square.push(grid[i][j])
					}
				}
			}
			squares.push(square)
		}
	}
	let block
	let solved = false
	while (solved === false) {
		for (let line of linesX) {
			if (line.includes(0)) {
				solved = false
				break
			} else {
				solved = true
			}
		}
		for (let i = 0; i < 9; i++) {
			if (i % 3 === 0) {
				block = i
			}
			for (let j = 0; j < 9; j++) {
				let neededNums = numbers.filter((num) => !linesX[i].includes(num))
				if (linesX[i][j] === 0) {
					let neededNum = neededNums.filter((num) => !linesY[j].includes(num))
					const possibleNums = neededNum.filter((num) => !squares[Math.floor(j / 3 + block)].includes(num))
					if (possibleNums.length === 1) {
						linesX[i][j] = possibleNums[0]
						linesY[j][i] = possibleNums[0]
						squares[Math.floor(j / 3 + block)].push(possibleNums[0])
					}
				}
			}
		}
	}
	return linesX
}

const puzzle = [
	[5, 3, 0, 0, 7, 0, 0, 0, 0],
	[6, 0, 0, 1, 9, 5, 0, 0, 0],
	[0, 9, 8, 0, 0, 0, 0, 6, 0],
	[8, 0, 0, 0, 6, 0, 0, 0, 3],
	[4, 0, 0, 8, 0, 3, 0, 0, 1],
	[7, 0, 0, 0, 2, 0, 0, 0, 6],
	[0, 6, 0, 0, 0, 0, 2, 8, 0],
	[0, 0, 0, 4, 1, 9, 0, 0, 5],
	[0, 0, 0, 0, 8, 0, 0, 7, 9],
]
console.log(sudoku(puzzle))

const letterRev = (str) => {
	let outputArr = []
	for (let word of str.split(" ")) {
		outputArr.push(word.split("").reverse().join(""))
	}
	return outputArr.join(" ")
}

const scream = (num) => {
	if (num < 1) {
		return "crickets"
	} else {
		return "lol" + "ol".repeat(num - 1)
	}
}

console.log(scream(10))

const createMap = (size) => {
	let output = ""
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			if (i % 2 === 0) {
				output += "#0"
			} else {
				output += "0#"
			}
		}
		output += "\n"
	}
	return output
}
console.log(createMap(3))

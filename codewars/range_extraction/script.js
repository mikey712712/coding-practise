function solution(list) {
	let startRange = list[0]
	const rangeArr = []
	let i = 0
	while (i < list.length) {
		if (list[i] !== list[i + 1] - 1) {
			rangeArr.push(list[i])
			startRange = list[i + 1]
			i += 1
		} else if (list[i] !== list[i + 2] - 2) {
			rangeArr.push(list[i])
			rangeArr.push(list[i + 1])
			startRange = list[i + 2]
			i += 2
		} else {
			let loop = true
			for (let j = i + 2; j < list.length; j++) {
				while (loop === true) {
					if (j === list.length - 1 && list[j - 1] === list[j] - 1) {
						rangeArr.push(`${startRange}-${list[j]}`)
						i = j + 1
						loop = false
					} else if (list[j] !== list[j + 1] - 1) {
						rangeArr.push(`${startRange}-${list[j]}`)
						startRange = list[j + 1]
						i = j + 1
						loop = false
					} else {
						i += 1
						loop = false
					}
				}
			}
		}
	}
	return rangeArr.join(",")
}
console.log(solution([-6, -3, -2, -1, 0, 1, 10, 11, 12, 15, 16, 17, 18, 19, 20, 100, 101, 102, 103, 104, 105, 106, 107, 110]))
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

function cakes(recipe, available) {
	let cook = null
	for (let ingredient in recipe) {
		if (cook === null) {
			cook = Math.floor(available[ingredient] / recipe[ingredient])
		} else if (Math.floor(available[ingredient] / recipe[ingredient]) < cook) {
			cook = Math.floor(available[ingredient] / recipe[ingredient])
		}
	}
	return cook || 0
}

let recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
let available = { sugar: 500, flour: 2000, milk: 2000 }

recipe = { cream: 200, flour: 300, sugar: 150, milk: 100, oil: 100 }
available = { sugar: 1700, flour: 20000, milk: 20000, oil: 30000, cream: 5000 }
console.log(cakes(recipe, available)) // 0

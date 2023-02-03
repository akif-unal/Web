import { readFile } from 'fs'

const fileName = 'santa.txt'

const findFloor = directions => {
	const resultFloor = directions.reduce((acc, curr) => {
		if (curr === '(') {
			acc += 1
		} else if (curr === ')') {
			acc -= 1
		}
		return acc
	}, 0)

	return resultFloor
}

const findFirstFloorToBasement = directions => {
	let floor = 0
	let index = 0

	while (floor >= 0) {
		const direction = directions[index]

		if (direction === '(') {
			floor++
		} else if (direction === ')') {
			floor--
		}

		index++
	}

	return index
}

const findFirstFloorToBasement2 = directions => {
	let floor = 0
	let index = 0

	directions.some(direction => {
		if (direction === '(') {
			floor++
		} else if (direction === ')') {
			floor--
		}

		++index
		return floor < 0
	})

	return index
}

// 1
function question1() {
	readFile(fileName, 'utf-8', (err, data) => {
		console.time('santa-time-part1')
		if (err) {
			console.log('Error: ', err)
		}

		const directions = data.split('')
		const part1Result = findFloor(directions)

		console.timeEnd('santa-time-part1')
		console.log('part 1 answer: ', part1Result)
	})
}

// 2
function question2() {
	readFile(fileName, 'utf-8', (err, data) => {
		console.time('santa-time-part2')
		if (err) {
			console.log('Error: ', err)
		}

		const directions = data.split('')
		const part2Result = findFirstFloorToBasement(directions)

		console.log('part 2 answer: ', part2Result)
		console.timeEnd('santa-time-part2')
	})
}

question1()
question2()

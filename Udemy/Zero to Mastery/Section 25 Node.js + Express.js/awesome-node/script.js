import fs from 'fs'

fs.readFile('./hello.txt', (err, data) => {
	if (err) {
		console.log('Error: ', err)
	}

	console.log('async', data.toString('utf-8'))
})

const files = fs.readFileSync('./hello.txt', 'utf-8')
console.log('sync', files)

// !Append
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
// 	if (err) {
// 		console.log('Error: ', err)
// 	}
// })

// !Write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
	if (err) {
		console.log('Error: ', err)
	}
})

// !Delete
fs.unlink('./bye.txt', err => {
	if (err) {
		console.log('Error: ', err)
	}
	console.log('Inception')
})

import { __dirname } from './helpers/index.js'
// const script2 = require('./script2.js')
// import largeNumber from './script2.js'

let a
if (1 === 1) {
	const { default: largeNumber } = await import('./script2.js')
	console.log('largeNumber', largeNumber)
	a = largeNumber
}

const b = 2

console.log(a + b)

console.log('path: ', __dirname)

// import fs from 'fs'
// import http from 'http'
// console.log(fs,http)

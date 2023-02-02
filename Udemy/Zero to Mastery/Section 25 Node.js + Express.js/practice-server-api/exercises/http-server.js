import http from 'http'

const server = http.createServer((req, res) => {
	console.log('I am listening on port 3000')
	// console.log("headers: " + req.headers)
	console.log('method: ' + req.method)
	console.log('url: ' + req.url)

	// res.setHeader('Content-Type', 'text/html')
	// res.write('<h1>Heellllooo</h1>')
	// res.end('Hello World')

	const user = {
		name: 'Max',
		age: 29,
		hobby: 'Skating',
	}

	res.setHeader('Content-Type', 'application/json')
	res.end(JSON.stringify(user))
})

server.listen(3000)

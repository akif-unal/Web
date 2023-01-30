import express from 'express'

const app = express()

app.use((req, res, next) => {
	console.log('<h1>hello</h1>')
	next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
	res.send('getting root')
})

app.get('/profile', (req, res) => {
	res.send('getting profile')
})

app.post('/profile', (req, res) => {
	console.log('req.body: ', req.body)
	console.log('req.header: ', req.header)
	console.log('req.headers: ', req.headers)

	const user = {
		name: 'Max',
		age: 29,
	}

	res.send(user)
})

app.listen(3000, () => {
	console.log('Server is running on port 3000')
})

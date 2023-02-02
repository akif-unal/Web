import express from 'express'
import { fileURLToPath } from 'url'
import { config } from 'dotenv'

const app = express()
config()

const PORT = process.env.PORT
const __dirname = fileURLToPath(new URL('.', import.meta.url))

app.use((req, res, next) => {
	console.log('<h1>hello</h1>')
	next()
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/:id', (req, res) => {
	// console.log('req.query: ', req.query)
	// console.log('req.params: ', req.params)
	// console.log("req.headers: ", req.headers);

	res.status(404).send('not found')
})

app.route('/profile')
	.get((req, res) => {
		res.send('getting profile')
	})
	.post((req, res) => {
		console.log('req.body: ', req.body)

		const user = {
			name: 'Max',
			age: 29,
		}

		res.send(user)
	})

app.listen(PORT, err => {
	if (err) {
		console.log('Error: ', err)
	}

	console.log(`Server is running on port ${PORT}`)
})

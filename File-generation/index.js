'use strict'
const path = require('path')
const express = require('express')
const cors = require('cors')
const pug = require('pug')
const fs = require('fs')
const CreateScript = require('./pugFile/CreateScript')
const createSCSSFile = require('./pugFile/style')
const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.send('File Generation Project!')
})

//Api to generate HTML CSS AND TS files.
app.post('/create', (req, res) => {
	const data = req.body
	console.log(data)
	res.send('File Generating!')
	const generatedHTMLFileFunction = pug.compileFile('./pugFile/html.pug')

	// const data = JSON.parse(fs.readFileSync(`${__dirname}/JSONdata/home.json`))
	// console.log(data)

	// create new directory(folder)
	fs.mkdir(`./generatedFiles/${data.component_name}`, (err) => {
		if (err) {
			throw err
		}
		console.log('Directory is created.')
	})

	//Code to Write HTML File
	fs.writeFile(
		`./generatedFiles/${data.component_name}/${data.component_name}.component.html`,
		generatedHTMLFileFunction({ data: data }),
		function (err) {
			if (err) throw err
			console.log('Saved HTML File!')
		}
	)
	//Code to Write scss File
	const createSCSS = createSCSSFile.generatedStyleFilefunction()
	// console.log(Script)
	fs.writeFile(
		`./generatedFiles/${data.component_name}/${data.component_name}.component.scss`,
		createSCSS,
		function (err) {
			if (err) throw err
			console.log('Saved SCSS File!')
		}
	)
	//Code to Write Script File
	const Script = CreateScript.generatedTSFilefunction(data.component_name)
	// console.log(Script)
	fs.writeFile(
		`./generatedFiles/${data.component_name}/${data.component_name}.component.ts`,
		Script,
		function (err) {
			if (err) throw err
			console.log('Saved Script File!')
		}
	)
})

app.listen(5001, () => console.log('Server is listening'))

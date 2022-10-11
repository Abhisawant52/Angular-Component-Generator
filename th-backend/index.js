const express = require('express')
const app = express()
var cors = require('cors')
const port = 3000

app.use(cors())

app.get('/Form1', (req, res) => {
	console.log('Sharing Form1')
	const Form = [
		{
			type: 'text',
			field_name: 'Campaign Code',
			id: 'Campaign-Code',
			isRequired: true,
		},
		{
			type: 'text',
			field_name: 'Campaign Name',
			id: 'Campaign-name',
			isRequired: true,
		},
		{
			type: 'radio',
			field_name: 'Campaign Type',
			id: 'Campaign-Type',
			isRequired: true,
			values: ['Global', 'Local'],
		},
		{
			type: 'dropdown',
			field_name: 'Store Code',
			id: 'Store-Code',
			isRequired: true,
			values: ['Store-Code1', 'Store-Code2'],
		},
		{
			type: 'dropdown',
			field_name: 'Status',
			id: 'Status',
			isRequired: true,
			values: ['Draft', 'Approved'],
		},
		{
			type: 'date',
			field_name: 'Start Date',
			id: 'Start-Date',
			isRequired: true,
		},
		{
			type: 'date',
			field_name: 'End Date',
			id: 'End-Date',
			isRequired: true,
		},
	]
	res.send(Form)
})
app.get('/Form2', (req, res) => {
	console.log('Sharing Form2')
	const Form = [
		{
			type: 'text',
			field_name: 'Offer Code',
			id: 'Offer-Code',
			isRequired: true,
		},
		{
			type: 'text',
			field_name: 'Offer Name',
			id: 'Offer-name',
			isRequired: true,
		},
		{
			type: 'radio',
			field_name: 'High Values',
			id: 'High-Values',
			isRequired: true,
			values: ['ON', 'OFF'],
		},
		{
			type: 'date',
			field_name: 'Start Date',
			id: 'Start-Date',
			isRequired: true,
		},
		{
			type: 'date',
			field_name: 'End Date',
			id: 'End-Date',
			isRequired: true,
		},
		{
			type: 'Text-Area',
			field_name: 'Terms of usages',
			id: 'Terms-of-usages',
			isRequired: true,
		},
		{
			type: 'Text-Area',
			field_name: 'Special Instruction',
			id: 'Special-Instruction',
			isRequired: true,
		},
	]

	res.send(Form)
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

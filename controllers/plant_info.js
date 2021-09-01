const express = require('express')
const router = express.Router()
const fs = require('fs')

//GET routes
//LIST all plants
router.get('/', (req, res) => {
	console.log('Plant info page!')
	let information = fs.readFileSync('./plant_info.json')
	let infoData = JSON.parse(information)
	let nameFilter = req.query.nameFilter
	if (nameFilter) {
		infoData = infoData.filter((info) => {
			return info.name.toLowerCase() === nameFilter.toLocaleLowerCase()
		})
	}
	console.log(infoData)
	res.render('plant_info/index', { myInfo: infoData })
})

//ADD another plant
router.get('/new', (req, res) => {
	res.render('plant_info/new')
})

//POST routes
router.post('/', (req, res) => {
	let information = fs.readFileSync('./plant_info.json')
	information = JSON.parse(information)
	information.push(req.body)
	fs.writeFileSync('./plant_info.json', JSON.stringify(information))
	res.redirect('/plant_info')
})

//Edit route
router.get('/edit/:idx', (req, res) => {
	let information = fs.readFileSync('./plant_info.json')
	let infoData = JSON.parse(information)
	res.render('plant_info/edit', {
		info: infoData[req.params.idx],
		infoId: req.params.idx
	})
	console.log(infoData)
})

//PUT route
router.put('/:idx', (req, res) => {
	//get plant data
	let information = fs.readFileSync('./plant_info.json')
	// parse the data
	let infoData = JSON.parse(information)
	//update the data
	let info = infoData[req.params.idx]
	info.name = req.body.name
	info.common = req.body.common
	info.light = req.body.light

	console.log(infoData)
	// question == did the info get changed in the array
	// infoData[req.params.idx].name = req.body.name
	// infoData[req.params.idx].common = req.body.common
	// infoData[req.params.idx].light = req.body.light
	fs.writeFileSync('./plant_info.json', JSON.stringify(infoData))
	res.redirect('/plant_info')
})

//DELETE route
router.delete('/:idx', (req, res) => {
	const information = fs.readFileSync('./plant_info.json')
	const infoData = JSON.parse(information)
	infoData.splice(req.params.idx, 1)
	fs.writeFileSync('./plant_info.json', JSON.stringify(infoData))
	res.redirect('/plant_info')
})

module.exports = router

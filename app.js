// express library
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')

// PORT
const PORT = process.env.PORT || 3000

// Controllers
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(methodOverride('_method'))
// app.use(express.urlendcoded({ extended: false }))
app.use('/plant_img', require('./controllers/plant_img'))
app.use('/plant_info', require('./controllers/plant_info'))

//Default route testing
app.get('/test', (req, res) => res.send('Server is running!'))
app.get('/', (req, res) => {
	res.render('home')
})
app.get('/*', (req, res) => res.render('404'))

//PORT log
app.listen(PORT, () => {
	console.log('Server listening on PORT', PORT)
})

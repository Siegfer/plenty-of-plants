const express = require('express')
const router = express.Router()
const fs = require('fs')

//GET routes
router.get('/', (req, res) => {
	console.log('Plant image page!')
})

module.exports = router

const express = require('express')
const getData = require('../controllers/home')

const router = express.Router()
const cors = require('cors')
// Gets the data from the csv file
router.get('/', cors(), getData)

module.exports = router
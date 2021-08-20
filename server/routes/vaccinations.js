const express = require('express');
const getData = require('../controllers/vaccinations');
const cors = require('cors')
const router = express.Router();

// Gets the data from the csv file
router.get('/',cors(), getData);

module.exports = router;
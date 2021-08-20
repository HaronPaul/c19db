const express = require('express');
const router = express.Router();
const getNews = require('../controllers/news')
const cors = require('cors')

router.get('/:date', cors(), getNews)

module.exports = router;
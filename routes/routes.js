var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('index'));

/* GET client and server pages */
router.get('/dash', (req, res) => res.render('dash'));
router.get('/player', (req, res) => res.render('player'));

module.exports = router;

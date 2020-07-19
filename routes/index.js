let express = require('express');
let DataService = require('./../service/DataService.js');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/getAllData', (req, res, next) => {
    let ds = new DataService();
    res.send(ds.getAllOnlineMusic());
});

module.exports = router;

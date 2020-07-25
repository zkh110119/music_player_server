let express = require('express');
let DataService = require('./../service/DataService.js');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', {title: 'Express'});
});

router.get('/getAllData', (req, res, next) => {
    let ds = new DataService();
    ds.getAllOnlineMusic(res);
});

/*router.get('/getOnlineMusicByKeyword', (req, res, next) => {
    res.send(req.query);
});*/

module.exports = router;

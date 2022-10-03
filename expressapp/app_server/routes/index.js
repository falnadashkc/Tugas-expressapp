var express = require('express');
var router = express.Router();

const ctrlMain = require("../controllers/main")  //import controller

/* GET home page. */
router.get('/', ctrlMain.index);  //ini routes

/*GET demo page. */
router.get("/demo"), function(req, res, next){
  res.render('index', {tittle: 'Test', nama: 'Demo'})
}
module.exports = router;

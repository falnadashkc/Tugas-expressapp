var express = require('express');
var router = express.Router();

//import controller
const ctrlUser = require("../controllers/user");

/* GET users listing. */
router.get('/', ctrlUser.index);
router.get('/:id/:nama?', ctrlUser.show);

module.exports = router;

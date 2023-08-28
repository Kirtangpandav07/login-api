var express = require('express');
var router = express.Router();
const ALLUSER=require('../controller/user')
const userControl=require('../controller/user')



/* GET home page. */
router.post('/login',ALLUSER.LOGIN);


router.post('/signup',ALLUSER.SIGNUP);

router.get('/alldata',userControl.chekuser,ALLUSER.ALL);

module.exports = router;

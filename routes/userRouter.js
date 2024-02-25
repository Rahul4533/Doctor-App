const express=require('express');
const { registerctrl } = require('../controllers/userctrl');

const router=express.Router();

router.post('/register',registerctrl);

module.exports=router;

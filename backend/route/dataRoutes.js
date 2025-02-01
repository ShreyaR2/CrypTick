const express = require('express');
const router = express.Router();

const {getAllData,getIndividualData}= require('../controllers/dataControllers')

router.get('/',getAllData);

router.get('',getIndividualData);


module.exports = router;
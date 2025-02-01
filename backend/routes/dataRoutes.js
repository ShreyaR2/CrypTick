const express = require('express');
const router = express.Router();

const {getAllData,getIndividualData}= require('../controllers/dataControllers')

router.get('/',getAllData);

router.get('/name',getIndividualData);


module.exports = router;
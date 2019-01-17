const express = require('express');
const router  = express.Router();
const User = require('../models/user.js');
const uploadCloud = require('../config/cloudinary.js');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express - Generated with IronGenerator' });
});

module.exports = router;

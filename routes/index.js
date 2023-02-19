const express = require('express');
const router = express.Router();
const path = require('path');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var fs = require('fs');
 

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

//Game
router.get('/blackjack', ensureAuthenticated, (req, res) =>
  //res.render('index.html')
  //res.sendFile(path.join('/index.html'))
  res.sendFile(__dirname + '/index.html')
  )

module.exports = router;

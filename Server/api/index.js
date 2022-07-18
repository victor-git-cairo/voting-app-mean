// express packages and database import
const express = require('express');
const router =  express.Router();

require ('./routes/Polls')(router)

module.exports = router
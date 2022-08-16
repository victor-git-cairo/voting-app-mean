// express packages and database import
const express = require('express');
const router =  express.Router();

require ('./routes/pollingSite')(router)
require ('./routes/candidates')(router)
require ('./routes/party')(router)

module.exports = router
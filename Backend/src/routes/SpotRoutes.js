const express = require('express');
const spotController = require('../controllers/spotsController');

function routes(spots) {
  const spotRouter = express.Router();
  const spotItems = spotController(spots);
  spotRouter.route('/')
    .get(spotItems.getMethod)
    .put(spotItems.putMethod);
  return spotRouter;
}

module.exports = routes;

const express = require('express');
const userController = require('../controllers/usersController');

function routes(user) {
  const userRouter = express.Router();
  const userItems = userController(user);
  userRouter.route('/')
    .get(userItems.getMethod)
    .put(userItems.putMethod);
  return userRouter;
}

module.exports = routes;

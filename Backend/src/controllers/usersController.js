function usersController(user) {
  function getMethod(req, res) {
    const { userId } = req.params;

    user.findById(userId, (errorFindUser, userData) => (errorFindUser
      ? res.send(errorFindUser)
      : res.send(userData)));
  }
  function putMethod({ body }, res) {
    user.create(body, (errorPutUser) => (errorPutUser
      ? res.send(errorPutUser)
      : res.send('user Added')));
  }
  return { getMethod, putMethod };
}

module.exports = usersController;

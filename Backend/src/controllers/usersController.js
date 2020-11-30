function usersController(user) {
  function getMethod(req, res) {
    const query = {};
    user.find(query, (errorFindUser, userData) => (errorFindUser
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

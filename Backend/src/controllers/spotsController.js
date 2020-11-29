function SpotController(spot) {
  function getMethod(req, res) {
    const query = {};
    spot.find(query, (errorFindSpot, SpotData) => (errorFindSpot
      ? res.send(errorFindSpot)
      : res.send(SpotData)));
  }
  function putMethod({ body }, res) {
    spot.create(body, (errorPutSpot) => (errorPutSpot
      ? res.send(errorPutSpot)
      : res.send('spot Added')));
  }
  return { getMethod, putMethod };
}

module.exports = SpotController;

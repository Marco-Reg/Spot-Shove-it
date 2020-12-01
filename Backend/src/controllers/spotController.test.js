const spotController = require('./spotController');

describe('spotController', () => {
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const spot = {
      findOneById: jest.fn().mockImplementationOnce((query, callback) => {
        callback(true, {});
      }),
    };
    spotController(spot).getMethod({ user: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
  test('Should call a response on getMethod', () => {
    const res = {
      send: jest.fn(),
    };
    const spot = {
      find: jest.fn().mockImplementationOnce((query, callback) => {
        callback(false, {});
      }),
    };
    spotController(spot).getMethod({ spot: null }, res);
    expect(res.send).toHaveBeenCalled();
  });
});

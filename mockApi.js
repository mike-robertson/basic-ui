const api = require('mock-my-api').default;

const ndcMock = Object.create(api);
ndcMock.init({
  defaultHeaders: [
    {
      name: 'Access-Control-Allow-Origin',
      value: '*',
    },
  ],
  endpoints: [{
    path: '/api/capture/order/:orderId',
    delay: {
      min: 500,
      max: 2000,
    },
    data: (req, res) => {
      res.json({ orderId: req.params.orderId, response: { status: 200 } });
    },
    method: 'POST',
  }, {
    path: '/api/capture/orders',
    delay: {
      min: 500,
      max: 2000,
    },
    data: (req, res) => {
      res.json([{
        orderId: 12345,
        response: { status: 200 },
      }, {
        orderId: 98765,
        response: { status: 409 },
      }, {
        orderId: 84723,
        response: { status: 500 },
      }]);
    },
    method: 'POST',
  }, {
    path: '/api/capture/store/:storeId/:date',
    data: (req, res) => {
      res.json([{
        orderId: 12345,
        response: { status: 200 },
      }, {
        orderId: 98765,
        response: { status: 409 },
      }, {
        orderId: 84723,
        response: { status: 500 },
      }]);
    },
    delay: {
      min: 5000,
      max: 10000,
    },
    method: 'POST',
  }],
});
ndcMock.start(3001);

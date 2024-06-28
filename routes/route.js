const express = require('express');
const app = express();
const cache = require('../cacheMiddleware')

module.exports = function (app) {
    const movies = require('../controllers/movies');
    const payment = require('../controllers/payment');

    app.route('/movie/popular', cache).get(movies.popular);
    app.route('/movie/detail', cache).get(movies.detail);
    app.route('/movie/search', cache).get(movies.search);

    app.route('/api/balance', cache).get(payment.balance);
}
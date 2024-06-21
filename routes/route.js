const express = require('express');
const app = express();
const cache = require('../cacheMiddleware')

module.exports = function (app) {
    const movies = require('../controllers/movies');

    app.route('/movie/popular', cache).get(movies.popular);
    app.route('/movie/detail', cache).get(movies.detail);
    app.route('/movie/search', cache).get(movies.search);
}
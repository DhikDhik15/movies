const express = require('express');
const app = express();

module.exports = function (app) {
    const movies = require('../controllers/movies');

    app.route('/movie/popular').get(movies.popular);
    app.route('/movie/detail').get(movies.detail);
    app.route('/movie/search').get(movies.search);
}
'use strict';
const axios = require('axios')

exports.popular = async (req, res) => {
    const response = await axios.get(`http://www.omdbapi.com/?y=2024&apikey=${process.env.OMDB_KEY}`);
    try {
        if (response.data.Response === "True") {
            response.data.Search.forEach(movie => {
                res.status(200).json({
                    status: 200,
                    data: {
                        title: movie.data.Title,
                        year: movie.data.Year,
                        image: movie.data.Poster
                    }
                })
            });
        } else {
            res.status(404).json({
                status:404,
                message: `No movies found.`
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error,
            status: response.data
        })
    }
}

exports.detail = async (req, res) => {
    try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${req.query.i}&apikey=${process.env.OMDB_KEY}`);
        if (response.data.Response == "True") {
            res.status(200).json({
                status: 200,
                data: {
                    title: response.data.Title,
                    year: response.data.Year,
                    image: response.data.Poster
                }
            })
        } else {
            res.status(404).json({
                status:404,
                message: `No movies found.`
            });
        }
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }
}

exports.search = async (req, res) => {
    try {
        const search = {
            title: req.body.title,
            year: req.body.year
        };
        if (search.title !='' && search.year!='') {
            const response = await axios.get(`http://www.omdbapi.com/?t=${search.title}&y=${search.year}&apikey=${process.env.OMDB_KEY}`);
            if (response.data.Response == "True") {
                res.status(200).json({
                    status: 200,
                    data: {
                        title: response.data.Title,
                        year: response.data.Year,
                        image: response.data.Poster
                    }
                })
            } else {
                res.status(404).json({ message: `No movies found.` });
            }
        } else if (search.title == '' || search.year == '') {
            const response = await axios.get(`http://www.omdbapi.com/?${search.title ? `t=${search.title}` : `y=${search.year}`}&apikey=${process.env.OMDB_KEY}`);
            if (response.data.Response == "True") {
                res.status(200).json({
                    status: 200,
                    data: {
                        title: response.data.Title,
                        year: response.data.Year,
                        image: response.data.Poster
                    }
                })
            } else {
                res.status(404).json({ message: `No movies found.` });
            }
        }
    } catch (error) {
        res.status(500).json({
            error: error,
        })
    }
}
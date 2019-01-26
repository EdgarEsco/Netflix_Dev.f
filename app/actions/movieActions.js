const Movie = require('../models/movies')

const createMovie = (data) => {

	return Movie.create(data);

};

module.exports = {
    createMovie
}
const movieModal = require('../model/movieModel');
const initialData = require('../data/initialData');

const getAllMovies = async (request, response) => {
    try {
        const isMovieData = await movieModal.find();

        if (isMovieData.length === 0) {
            await movieModal.insertMany(initialData);
        }

        const movieData = await movieModal.find({}).sort({ movieYear: -1 });
        response.status(200).json(movieData);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const getMovieById = async (request, response) => {
    const { id } = request.params;

    try {
        const movie = await movieModal.findOne({ id: id });

        if (!movie) {
            return response.status(404).json({ message: 'Movie not found.' });
        }

        response.status(200).json(movie);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const addMovie = async (request, response) => {
    const { id, movieName, movieYear, movieGenre1, movieGenre2, imdbRating, movieTicketCost, seatsAvailable } = request.body;
    const movieImage = request.file ? request.file.filename : null;

    try {
        const existingMovie = await movieModal.findOne({ id: id });
        if (existingMovie) {
            return response.status(409).json({ message: 'Movie ID already exists.' });
        }

        const existingMovieName = await movieModal.findOne({ movieName: movieName });
        if (existingMovieName) {
            return response.status(409).json({ message: 'Movie Name already exists.' });
        }

        const newMovieData = {
            id: id,
            movieName: movieName,
            movieYear: movieYear,
            movieGenre1: movieGenre1,
            movieGenre2: movieGenre2,
            imdbRating: imdbRating,
            movieTicketCost: movieTicketCost,
            seatsAvailable: seatsAvailable,
            movieImage: movieImage
        };

        const newMovie = await movieModal.create(newMovieData);
        response.status(201).json(newMovie);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const updateMovie = async (request, response) => {
    const { id } = request.params;
    const updateData = request.body;

    try {
        const updatedMovie = await movieModal.findOneAndUpdate({ id: id }, updateData, { new: true });

        if (!updatedMovie) {
            return response.status(404).json({ message: 'Movie not found.' });
        }

        response.status(200).json(updatedMovie);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const deleteMovie = async (request, response) => {
    const { id } = request.params;

    try {
        const deletedMovie = await movieModal.findOneAndDelete({ id: id });

        if (!deletedMovie) {
            return response.status(404).json({ message: 'Movie not found.' });
        }

        response.status(200).json({ message: 'Movie deleted successfully.' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

const suggestMovie = async (request, response) => {
    try {
        const { movieGenre1, movieGenre2 } = request.body;
        const suggestedMovie = await movieModal.find({
            $and: [
                { $or: [{ movieGenre1: movieGenre1 }, { movieGenre1: movieGenre2 }] },
                { $or: [{ movieGenre2: movieGenre1 }, { movieGenre2: movieGenre2 }] }
            ]
        }).sort({ imdbRating: -1 });

        response.status(200).json(suggestedMovie);
    } catch (error) {
        response.status(500).json({ message: error.message });n
    }
};

module.exports = { getMovieById, getAllMovies, addMovie, updateMovie, deleteMovie, suggestMovie };

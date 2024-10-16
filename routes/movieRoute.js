const express = require('express');
const router = express.Router();
const { getMovieById,getAllMovies, addMovie, updateMovie, deleteMovie, suggestMovie } = require('../controllers/movieController');
const upload = require('../middleware/multer');

router.route('/').get(getAllMovies);

router.route('/addMovie').post(upload.single('movieImage'), addMovie);

router.route('/:id').put(updateMovie);

router.route('/:id').delete(deleteMovie);

router.route('/:id').get(getMovieById);

router.route('/suggest').post(suggestMovie);

module.exports = router;

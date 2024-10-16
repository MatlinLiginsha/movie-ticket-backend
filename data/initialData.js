const initialData = [
    {
        "id": "1",
        "movieName": "Inception",
        "movieYear": "2010",
        "movieGenre1": "Action",
        "movieGenre2": "SciFi",
        "imdbRating": 8.8,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'movie1.jpg'
    },
    {
        "id": "2",
        "movieName": "The Hangover",
        "movieYear": "2009",
        "movieGenre1": "Comedy",
        "movieGenre2": "Adventure",
        "imdbRating": 7.7,
        "movieTicketCost": 12,
        "seatsAvailable": 55,
        "movieImage": 'hangover.jpeg'

    },
    {
        "id": "3",
        "movieName": "The Shawshank Redemption",
        "movieYear": "1994",
        "movieGenre1": "Drama",
        "movieGenre2": "Crime",
        "imdbRating": 9.3,
        "movieTicketCost": 11,
        "seatsAvailable": 58,
        "movieImage": 'shawshankredemption.jpg'
    },
    {
        "id": "4",
        "movieName": "Interstellar",
        "movieYear": "2014",
        "movieGenre1": "SciFi",
        "movieGenre2": "Adventure",
        "imdbRating": 8.6,
        "movieTicketCost": 9,
        "seatsAvailable": 56,
        "movieImage": 'interstellar.jpg'

    },
    {
        "id": "5",
        "movieName": "The Conjuring",
        "movieYear": "2013",
        "movieGenre1": "Horror",
        "movieGenre2": "Thriller",
        "imdbRating": 7.5,
        "movieTicketCost": 11,
        "seatsAvailable": 59,
        "movieImage": 'conjuring.jpeg'

    },
    {
        "id": "6",
        "movieName": "La La Land",
        "movieYear": "2016",
        "movieGenre1": "Romance",
        "movieGenre2": "Drama",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'lalaland.jpg'

    },
    {
        "id": "7",
        "movieName": "The Avengers",
        "movieYear": "2012",
        "movieGenre1": "Action",
        "movieGenre2": "Adventure",
        "imdbRating": 8.0,
        "movieTicketCost": 12,
        "seatsAvailable": 55,
        "movieImage": 'avengers.jpg'

    },
    {
        "id": "8",
        "movieName": "Toy Story",
        "movieYear": "1995",
        "movieGenre1": "Animation",
        "movieGenre2": "Adventure",
        "imdbRating": 8.3,
        "movieTicketCost": 10,
        "seatsAvailable": 58,
        "movieImage": 'toystory.jpg'

    },
    {
        "id": "9",
        "movieName": "The Dark Knight",
        "movieYear": "2008",
        "movieGenre1": "Action",
        "movieGenre2": "Thriller",
        "imdbRating": 9.0,
        "movieTicketCost": 13,
        "seatsAvailable": 54,
        "movieImage": 'darkknight.jpg'

    },
    {
        "id": "10",
        "movieName": "Harry Potter and the Philosopher's Stone",
        "movieYear": "2001",
        "movieGenre1": "Fantasy",
        "movieGenre2": "Adventure",
        "imdbRating": 7.6,
        "movieTicketCost": 11,
        "seatsAvailable": 57,
        "movieImage": 'harrypotter.jpg'

    },
    {
        "id": "11",
        "movieName": "Deadpool",
        "movieYear": "2016",
        "movieGenre1": "Action",
        "movieGenre2": "Comedy",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'deadpool.png'

    },
    {
        "id": "12",
        "movieName": "Jurassic Park",
        "movieYear": "1993",
        "movieGenre1": "Adventure",
        "movieGenre2": "SciFi",
        "imdbRating": 8.1,
        "movieTicketCost": 12,
        "seatsAvailable": 56,
        "movieImage": 'jurassicpark.jpg'

    },
    {
        "id": "13",
        "movieName": "Pulp Fiction",
        "movieYear": "1994",
        "movieGenre1": "Drama",
        "movieGenre2": "Crime",
        "imdbRating": 8.9,
        "movieTicketCost": 11,
        "seatsAvailable": 58,
        "movieImage": 'pulpfiction.jpg'

    },
    {
        "id": "14",
        "movieName": "Finding Nemo",
        "movieYear": "2003",
        "movieGenre1": "Animation",
        "movieGenre2": "Adventure",
        "imdbRating": 8.1,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'findingnemo.jpeg'

    },
    {
        "id": "15",
        "movieName": "The Matrix",
        "movieYear": "1999",
        "movieGenre1": "Action",
        "movieGenre2": "SciFi",
        "imdbRating": 8.7,
        "movieTicketCost": 12,
        "seatsAvailable": 55,
        "movieImage": 'thematrix.jpeg'

    },
    {
        "id": "16",
        "movieName": "The Lion King",
        "movieYear": "1994",
        "movieGenre1": "Animation",
        "movieGenre2": "Adventure",
        "imdbRating": 8.5,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'lionking.jpg'

    },
    {
        "id": "17",
        "movieName": "Jaws",
        "movieYear": "1975",
        "movieGenre1": "Thriller",
        "movieGenre2": "Horror",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'jaws.jpg'

    },
    {
        "id": "18",
        "movieName": "The Godfather",
        "movieYear": "1972",
        "movieGenre1": "Drama",
        "movieGenre2": "Crime",
        "imdbRating": 9.2,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'godfather.jpeg'

    },
    {
        "id": "19",
        "movieName": "Back to the Future",
        "movieYear": "1985",
        "movieGenre1": "Adventure",
        "movieGenre2": "Comedy",
        "imdbRating": 8.5,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'backtothefuture.jpg'

    },
    {
        "id": "20",
        "movieName": "The Social Network",
        "movieYear": "2010",
        "movieGenre1": "Drama",
        "movieGenre2": "Biography",
        "imdbRating": 7.7,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'socialnetwork.jpg'

    },
    {
        "id": "21",
        "movieName": "Guardians of the Galaxy",
        "movieYear": "2014",
        "movieGenre1": "Action",
        "movieGenre2": "SciFi",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'guadians.jpg'

    },
    {
        "id": "22",
        "movieName": "Zootopia",
        "movieYear": "2016",
        "movieGenre1": "Animation",
        "movieGenre2": "Comedy",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'zootopia.jpg'

    },
    {
        "id": "23",
        "movieName": "The Exorcist",
        "movieYear": "1973",
        "movieGenre1": "Horror",
        "movieGenre2": "Thriller",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'exorcist.jpg'

    },
    {
        "id": "24",
        "movieName": "Eternal Sunshine of the Spotless Mind",
        "movieYear": "2004",
        "movieGenre1": "Drama",
        "movieGenre2": "Romance",
        "imdbRating": 8.3,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'eternal.jpeg'

    },
    {
        "id": "25",
        "movieName": "The Incredibles",
        "movieYear": "2004",
        "movieGenre1": "Animation",
        "movieGenre2": "Action",
        "imdbRating": 8.0,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'incredibles.jpg'

    },
    {
        "id": "26",
        "movieName": "Mad Max: Fury Road",
        "movieYear": "2015",
        "movieGenre1": "Action",
        "movieGenre2": "SciFi",
        "imdbRating": 8.1,
        "movieTicketCost": 10,
        "seatsAvailable": 60,
        "movieImage": 'madmax.jpg'

    }
];
module.exports = initialData

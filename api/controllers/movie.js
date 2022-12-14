const axios = require("axios");
const API_KEY = process.env.TMDB_API_KEY;
const tmdbAPI = process.env.TMDB_API;

function MovieController() {}

MovieController.getPopular = (req, res) => {
  return axios
    .get(`${tmdbAPI}/movie/popular?api_key=${API_KEY}`)
    .then((response) => res.send(response.data));
};

MovieController.getMovie = (req, res) => {
  const movie_id = req.params.id;
  return axios
    .get(`${tmdbAPI}/movie/${movie_id}?api_key=${API_KEY}`)
    .then((response) => res.send(response.data));
};

module.exports = MovieController;

/* {
    "adult": false,
    "backdrop_path": "/sjcPWJ5TXgFglsoixNxyZRyEUq3.jpg",
    "belongs_to_collection": {
      "id": 87359,
      "name": "Mission: Impossible Collection",
      "poster_path": "/geEjCGfdmRAA1skBPwojcdvnZ8A.jpg",
      "backdrop_path": "/jYl0UuJFcmhymv9ZNO14lPLDY1Z.jpg"
    },
    "budget": 150000000,
    "genres": [
      {
        "id": 12,
        "name": "Adventure"
      },
      {
        "id": 28,
        "name": "Action"
      },
      {
        "id": 53,
        "name": "Thriller"
      }
    ],
    "homepage": "",
    "id": 956,
    "imdb_id": "tt0317919",
    "original_language": "en",
    "original_title": "Mission: Impossible III",
    "overview": "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
    "popularity": 43.073,
    "poster_path": "/vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
    "production_companies": [
      {
        "id": 4,
        "logo_path": "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
        "name": "Paramount",
        "origin_country": "US"
      },
      {
        "id": 44,
        "logo_path": null,
        "name": "Cruise/Wagner Productions",
        "origin_country": "US"
      }
    ],
    "production_countries": [
      {
        "iso_3166_1": "US",
        "name": "United States of America"
      }
    ],
    "release_date": "2006-05-03",
    "revenue": 398479497,
    "runtime": 126,
    "spoken_languages": [
      {
        "english_name": "German",
        "iso_639_1": "de",
        "name": "Deutsch"
      },
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      },
      {
        "english_name": "Italian",
        "iso_639_1": "it",
        "name": "Italiano"
      },
      {
        "english_name": "Mandarin",
        "iso_639_1": "zh",
        "name": "普通话"
      },
      {
        "english_name": "Czech",
        "iso_639_1": "cs",
        "name": "Český"
      },
      {
        "english_name": "Cantonese",
        "iso_639_1": "cn",
        "name": "广州话 / 廣州話"
      }
    ],
    "status": "Released",
    "tagline": "The mission begins 05:05:06.",
    "title": "Mission: Impossible III",
    "video": false,
    "vote_average": 6.705,
    "vote_count": 5602
  } */

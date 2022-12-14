const axios = require("axios");
const API_KEY = process.env.TMDB_API_KEY;
const tmdbAPI = process.env.TMDB_API;

function TvController() {}

TvController.getPopular = (req, res) => {
  return axios
    .get(`${tmdbAPI}/tv/popular?api_key=${API_KEY}`)
    .then((response) => res.send(response.data));
};

TvController.getTv = (req, res) => {
  const tv_id = req.params.id;
  return axios
    .get(`${tmdbAPI}/tv/${tv_id}?api_key=${API_KEY}`)
    .then((response) => res.send(response.data));
};

module.exports = TvController;

/* {
    "adult": false,
    "backdrop_path": "/tqb56e4o7AMzyXZJF086sgkeqcb.jpg",
    "created_by": [
      {
        "id": 15312,
        "credit_id": "5257657f760ee36aaa3675a0",
        "name": "Bruce Geller",
        "gender": 2,
        "profile_path": null
      }
    ],
    "episode_run_time": [
      60,
      50
    ],
    "first_air_date": "1966-09-17",
    "genres": [
      {
        "id": 10759,
        "name": "Action & Adventure"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 9648,
        "name": "Mystery"
      }
    ],
    "homepage": "",
    "id": 4357,
    "in_production": false,
    "languages": [
      "en"
    ],
    "last_air_date": "1973-03-30",
    "last_episode_to_air": {
      "air_date": "1973-03-30",
      "episode_number": 22,
      "id": 300952,
      "name": "Imitation",
      "overview": "The Marnsburg Crown Jewels were brought to the U.S. and stolen from the UN Building - Jena Cole, a thief, is believed responsible but have no leads on the location of the jewels. The IMF must recover the jewels before the hostile Marnsburg government makes a case out of it. Jena is to turn the jewels over to the Syndicate, which financed the theft. Barney manage to get close to Jena and she finds he has plans to the Marnsburg Consulate. Meanwhile, the IMF return the \"\"real\"\" jewels, claiming the first ones were fake and confirming it throuigh her diamond fence (a IMF replacement). Jena and Barney team up to get into the consulate and steal the \"\"real\"\" jewels and turns them over to Jim the creditor, so Jena tries to fake him out for substituting her supposedly fake gems for the \"\"real\"\" ones, then sneak out. The Syndicate shows up and figures out which gems are which, and the police take everyone, including Jena, into custody.",
      "production_code": "",
      "runtime": null,
      "season_number": 7,
      "show_id": 4357,
      "still_path": "/3aSPNP2TnRcgN0rFzaLyOM5O9Ln.jpg",
      "vote_average": 5,
      "vote_count": 1
    },
    "name": "Mission: Impossible",
    "next_episode_to_air": null,
    "networks": [
      {
        "id": 16,
        "name": "CBS",
        "logo_path": "/wWA5mILSAyahtdNQh1WiADi6PRI.png",
        "origin_country": "US"
      }
    ],
    "number_of_episodes": 171,
    "number_of_seasons": 7,
    "origin_country": [
      "US"
    ],
    "original_language": "en",
    "original_name": "Mission: Impossible",
    "overview": "Mission: Impossible is an American television series that was created and initially produced by Bruce Geller. It chronicles the missions of a team of secret government agents known as the Impossible Missions Force. In the first season, the team is led by Dan Briggs, played by Steven Hill; Jim Phelps, played by Peter Graves, takes charge for the remaining seasons. A hallmark of the series shows Briggs or Phelps receiving his instructions on a recording that then self-destructs, followed by the theme music composed by Lalo Schifrin.\n\nThe series aired on the CBS network from September 1966 to March 1973, then returned to television for two seasons on ABC, from 1988 to 1990, retaining only Graves in the cast. It later inspired a popular series of theatrical motion pictures starring Tom Cruise, beginning in 1996.",
    "popularity": 25.455,
    "poster_path": "/oVhJQdIc0MpGEgrxGyjtu09ZVMr.jpg",
    "production_companies": [
      {
        "id": 9223,
        "logo_path": "/of4mmVt6egYaO9oERJbuUxMOTkj.png",
        "name": "Paramount Television Studios",
        "origin_country": "US"
      },
      {
        "id": 39856,
        "logo_path": "/x929GPaOozzVA92B0IkjbucZRAk.png",
        "name": "Desilu Productions",
        "origin_country": "US"
      }
    ],
    "production_countries": [],
    "seasons": [
      {
        "air_date": "1966-09-17",
        "episode_count": 28,
        "id": 12890,
        "name": "Season 1",
        "overview": "The first season of the original Mission: Impossible originally aired Saturdays at 9:00-10:00 pm on CBS from September 17, 1966 to January 7, 1967 and at 8:30-9:30 pm from January 14 to April 22, 1967.",
        "poster_path": "/7BbQjfyNNSejXrYthyqVZIdQbKz.jpg",
        "season_number": 1
      },
      {
        "air_date": "1967-09-10",
        "episode_count": 25,
        "id": 12889,
        "name": "Season 2",
        "overview": "The second season of the original Mission: Impossible originally aired Sundays at 10:00-11:00 pm on CBS from September 10, 1967 to March 17, 1968.",
        "poster_path": "/nyB7XBdhstp3DVAUVmGhuaQQzIV.jpg",
        "season_number": 2
      },
      {
        "air_date": "1968-09-29",
        "episode_count": 25,
        "id": 12892,
        "name": "Season 3",
        "overview": "The third season of the original Mission: Impossible originally aired Sundays at 10:00-11:00 pm on CBS from September 29, 1968 to April 20, 1969.",
        "poster_path": "/4Ar1pjh82z9KeKxLaEtXNANC8Js.jpg",
        "season_number": 3
      },
      {
        "air_date": "1969-09-28",
        "episode_count": 26,
        "id": 12893,
        "name": "Season 4",
        "overview": "The fourth season of the original Mission: Impossible originally aired Sundays at 10:00-11:00 pm on CBS from September 28, 1969 to March 29, 1970.",
        "poster_path": "/jqAqayIliEGxZujalrfIMwkcUoG.jpg",
        "season_number": 4
      },
      {
        "air_date": "1970-09-19",
        "episode_count": 23,
        "id": 12888,
        "name": "Season 5",
        "overview": "The fifth season of the original Mission: Impossible originally aired Saturdays at 7:30-8:30 pm from September 19, 1970 to March 6, 1971. \"The Merchant\" originally aired Wednesday, March 17, 1971 at 7:30-8:30 pm.",
        "poster_path": "/Zr0fl38Srf377paOwxGzZzXXh2.jpg",
        "season_number": 5
      },
      {
        "air_date": "1971-09-18",
        "episode_count": 22,
        "id": 12891,
        "name": "Season 6",
        "overview": "The sixth season of the original Mission: Impossible originally aired Saturdays at 10:00-11:00 pm on CBS from September 18, 1971 to February 26, 1972.",
        "poster_path": "/twPlHTf3sx5DiKchOOYR6Z7vsHT.jpg",
        "season_number": 6
      },
      {
        "air_date": "1972-09-16",
        "episode_count": 22,
        "id": 12887,
        "name": "Season 7",
        "overview": "The seventh and final season of the original Mission: Impossible originally aired Saturdays at 10:00-11:00 pm on CBS from September 16 to December 9, 1972 and Fridays at 8:00-9:00 pm from December 22, 1972 to March 30, 1973.",
        "poster_path": "/7oYc0pHDJ9iVUV7DFPbja1LLXAL.jpg",
        "season_number": 7
      }
    ],
    "spoken_languages": [
      {
        "english_name": "English",
        "iso_639_1": "en",
        "name": "English"
      }
    ],
    "status": "Ended",
    "tagline": "",
    "type": "Scripted",
    "vote_average": 7.7,
    "vote_count": 209
  } */

const axios = require("axios");
const API_KEY = process.env.TMDB_API_KEY;
const tmdbAPI = process.env.TMDB_API;
function SearchController() {}

SearchController.search = (req, res) => {
  return axios
    .get(`${tmdbAPI}/search/multi?api_key=${API_KEY}&${req.params.query}`)
    .then((response) => res.send(response.data));
};

module.exports = SearchController;

/* {
    "page": 1,
    "results": [
      {
        "adult": false,
        "backdrop_path": "/sjcPWJ5TXgFglsoixNxyZRyEUq3.jpg",
        "genre_ids": [
          12,
          28,
          53
        ],
        "id": 956,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible III",
        "overview": "Retired from active duty to train new IMF agents, Ethan Hunt is called back into action to confront sadistic arms dealer, Owen Davian. Hunt must try to protect his girlfriend while working with his new team to complete the mission.",
        "popularity": 43.073,
        "poster_path": "/vKGYCpmQyV9uHybWDzXuII8Los5.jpg",
        "release_date": "2006-05-03",
        "title": "Mission: Impossible III",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 5599
      },
      {
        "adult": false,
        "backdrop_path": "/24DZfupDlhXeTchmcOkoGRhP5Vg.jpg",
        "genre_ids": [
          12,
          28,
          53
        ],
        "id": 955,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible II",
        "overview": "With computer genius Luther Stickell at his side and a beautiful thief on his mind, agent Ethan Hunt races across Australia and Spain to stop a former IMF agent from unleashing a genetically engineered biological weapon called Chimera. This mission, should Hunt choose to accept it, plunges him into the center of an international crisis of terrifying magnitude.",
        "popularity": 33.506,
        "poster_path": "/2njB2A85Ni7bRR7vIOrfv6TBPeC.jpg",
        "release_date": "2000-05-24",
        "title": "Mission: Impossible II",
        "video": false,
        "vote_average": 6.1,
        "vote_count": 5510
      },
      {
        "backdrop_path": "/tqb56e4o7AMzyXZJF086sgkeqcb.jpg",
        "first_air_date": "1966-09-17",
        "genre_ids": [
          10759,
          80,
          18,
          9648
        ],
        "id": 4357,
        "media_type": "tv",
        "name": "Mission: Impossible",
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Mission: Impossible",
        "overview": "Mission: Impossible is an American television series that was created and initially produced by Bruce Geller. It chronicles the missions of a team of secret government agents known as the Impossible Missions Force. In the first season, the team is led by Dan Briggs, played by Steven Hill; Jim Phelps, played by Peter Graves, takes charge for the remaining seasons. A hallmark of the series shows Briggs or Phelps receiving his instructions on a recording that then self-destructs, followed by the theme music composed by Lalo Schifrin.\n\nThe series aired on the CBS network from September 1966 to March 1973, then returned to television for two seasons on ABC, from 1988 to 1990, retaining only Graves in the cast. It later inspired a popular series of theatrical motion pictures starring Tom Cruise, beginning in 1996.",
        "popularity": 25.455,
        "poster_path": "/oVhJQdIc0MpGEgrxGyjtu09ZVMr.jpg",
        "vote_average": 7.7,
        "vote_count": 209
      },
      {
        "adult": false,
        "backdrop_path": "/aw4FOsWr2FY373nKSxbpNi3fz4F.jpg",
        "genre_ids": [
          28,
          12
        ],
        "id": 353081,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Fallout",
        "overview": "When an IMF mission ends badly, the world is faced with dire consequences. As Ethan Hunt takes it upon himself to fulfill his original briefing, the CIA begin to question his loyalty and his motives. The IMF team find themselves in a race against time, hunted by assassins while trying to prevent a global catastrophe.",
        "popularity": 64.999,
        "poster_path": "/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
        "release_date": "2018-07-13",
        "title": "Mission: Impossible - Fallout",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 6820
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 575264,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Dead Reckoning Part One",
        "overview": "The seventh instalment of the Mission: Impossible franchise.",
        "popularity": 20.124,
        "poster_path": "/j1qieED1o3ZUNJ0332UKYhvlV65.jpg",
        "release_date": "2023-07-12",
        "title": "Mission: Impossible - Dead Reckoning Part One",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
          28,
          12,
          53
        ],
        "id": 575265,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Dead Reckoning Part Two",
        "overview": "The eighth instalment of the Mission: Impossible franchise.",
        "popularity": 16.299,
        "poster_path": "/l2fgb4JU0uLpWTaMFrxPqfQ94Kr.jpg",
        "release_date": "2024-06-26",
        "title": "Mission: Impossible - Dead Reckoning Part Two",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
      },
      {
        "backdrop_path": "/c94cQjEU14GLL36kkU2TUsmEqoo.jpg",
        "first_air_date": "1988-10-23",
        "genre_ids": [
          18,
          10759,
          80
        ],
        "id": 9894,
        "media_type": "tv",
        "name": "Mission: Impossible",
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "Mission: Impossible",
        "overview": "Mission: Impossible is an American television series that chronicles the missions of a team of secret American government agents known as the Impossible Missions Force. The show is a revival of the 1966 TV series of the same name. The only actor to return for the series as a regular cast member was Peter Graves who played Jim Phelps, although two other cast members from the original series returned as guest stars. The only other regular cast member to return for every episode was the voice of \"The Tape\", Bob Johnson.",
        "popularity": 18.319,
        "poster_path": "/4AZwDa0RZLIVsOgZxlgOqNUw3U6.jpg",
        "vote_average": 7.5,
        "vote_count": 154
      },
      {
        "adult": false,
        "backdrop_path": "/eDtsTxALld2gPw9lO1hQIJXqMHu.jpg",
        "genre_ids": [
          12,
          28,
          53
        ],
        "id": 954,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible",
        "overview": "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
        "popularity": 37.287,
        "poster_path": "/pyQqxuDYmkyNnjC131bmt1bzShW.jpg",
        "release_date": "1996-05-22",
        "title": "Mission: Impossible",
        "video": false,
        "vote_average": 7,
        "vote_count": 7325
      },
      {
        "adult": false,
        "backdrop_path": "/hqyjzDRCs1N5gEsh2gklzPdsEFD.jpg",
        "genre_ids": [
          28,
          53,
          12
        ],
        "id": 56292,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Ghost Protocol",
        "overview": "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
        "popularity": 72.256,
        "poster_path": "/7GCKNRbzcA4rJXAKoE8KS9IDnZP.jpg",
        "release_date": "2011-12-07",
        "title": "Mission: Impossible - Ghost Protocol",
        "video": false,
        "vote_average": 7,
        "vote_count": 8539
      },
      {
        "adult": false,
        "backdrop_path": "/2mUpYunvmXQni74Lydj2kKP2M10.jpg",
        "genre_ids": [
          28,
          12
        ],
        "id": 177677,
        "media_type": "movie",
        "original_language": "en",
        "original_title": "Mission: Impossible - Rogue Nation",
        "overview": "Ethan and team take on their most impossible mission yet—eradicating 'The Syndicate', an International and highly-skilled rogue organisation committed to destroying the IMF.",
        "popularity": 55.559,
        "poster_path": "/mXwC63mlpijqllhoeGnKBGgPtBa.jpg",
        "release_date": "2015-07-23",
        "title": "Mission: Impossible - Rogue Nation",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 7523
      }
    ],
    "total_pages": 1,
    "total_results": 10
  } */

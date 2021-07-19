const API_KEY = process.env.TMDB_API_KEY;

const requests = {
  trending: {
    title: "Trending",
    endpoint: "/trending/all/week",
  },
  top_rated: {
    title: "Top Rated",
    endpoint: "/movie/top_rated",
  },
  action: {
    title: "Action",
    endpoint: "/discover/movie",
    genreID: 28,
  },
  animation: {
    title: "Animation",
    endpoint: "/discover/movie",
    genreID: 16,
  },
  comedy: {
    title: "Comedy",
    endpoint: "/discover/movie",
    genreID: 35,
  },
  horror: {
    title: "Horror",
    endpoint: "/discover/movie",
    genreID: 27,
  },
  mystery: {
    title: "Mystery",
    endpoint: "/discover/movie",
    genreID: 9648,
  },
  romance: {
    title: "Romance",
    endpoint: "/discover/movie",
    genreID: 10749,
  },
  sci_fi: {
    title: "Sci Fi",
    endpoint: "/discover/movie",
    genreID: 878,
  },
  tv: {
    title: "TV Show",
    endpoint: "/discover/movie",
    genreID: 10770,
  },
};

export default requests;

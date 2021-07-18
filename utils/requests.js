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
    endpoint: "/discover/movie?with_genre=28",
  },
  comedy: {
    title: "Comedy",
    endpoint: "/discover/movie?with_genre=35",
  },
  horror: {
    title: "Horror",
    endpoint: "/discover/movie?with_genre=27",
  },
  romance: {
    title: "Romance",
    endpoint: "/discover/movie?with_genre=10749",
  },
  mystery: {
    title: "Mystery",
    endpoint: "/discover/movie?with_genre=9648",
  },
  sci_fi: {
    title: "Sci Fi",
    endpoint: "/discover/movie?with_genre=878",
  },
  animation: {
    title: "Animation",
    endpoint: "/discover/movie?with_genre=16",
  },
  tv: {
    title: "TV Show",
    endpoint: "/discover/movie?with_genre=10770",
  },
};

export default requests;

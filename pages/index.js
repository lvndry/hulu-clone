import Head from "next/head";

import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import Nav from "../components/Nav";

import requests from "../utils/requests";

export default function Home({ movies }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <meta
          name="description"
          content="Hulu application written with Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <MoviesList movies={movies.results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  let params = new URLSearchParams({
    api_key: process.env.TMDB_API_KEY,
    language: "en-US",
  });

  params =
    requests[genre] && requests[genre].genreID
      ? new URLSearchParams({
          api_key: params.get("api_key"),
          language: params.get("language"),
          with_genres: requests[genre].genreID,
        })
      : params;

  const baseURL = "https://api.themoviedb.org/3";

  const url = `${baseURL}${
    requests[genre]?.endpoint || requests.trending.endpoint
  }?${params}`;

  const movies = await fetch(url).then((res) => res.json());

  return {
    props: {
      movies,
    },
  };
}

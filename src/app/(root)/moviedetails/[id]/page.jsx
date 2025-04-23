"use client";
import React, { useEffect, useState, use } from "react";

function Page({ params }) {
  const { id } = use(params);
  const [singleMoviedetails, setsingleMoviedetails] = useState(null);
  const [castallData, setcastallData] = useState([]);

  useEffect(() => {
    const singleMovie = async () => {
      const apiFetch = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      const moviedata = await apiFetch.json();
      setsingleMoviedetails(moviedata);
    };

    const castApiurl = async () => {
      const castApi = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`
      );
      const castdata = await castApi.json();
      setcastallData(castdata.cast)
    };

    singleMovie();
    castApiurl();
  }, [id]);

  console.log(castallData)
  if (!singleMoviedetails) return <div>Loading...</div>;

  return (
    <>
      <div className="relative">
        <div
          className="w-full bg-zinc-900 flex justify-between bg-center bg-no-repeat items-center rounded-2xl p-10 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/original${singleMoviedetails.backdrop_path}')`,
          }}
        >
          <div className="flex gap-10 bg-zinc-900/90 p-5 rounded-2xl w-full">
            <img
              src={`https://image.tmdb.org/t/p/w500${singleMoviedetails.poster_path}`}
              alt={singleMoviedetails.original_title}
              className="w-[400px] rounded-2xl"
            />
            <div className="text-xl font-semibold opacity-[0.7] flex flex-col gap-5 mt-10">
              <h2 className="text-5xl font-bold">{singleMoviedetails.title}</h2>
              <h2>Rating: {singleMoviedetails.vote_average}/10</h2>
              <h3 className="flex">
                Timing: {singleMoviedetails.runtime} | &nbsp;
                {singleMoviedetails.genres.map((elem, idex) => (
                  <span key={idex}>{elem.name}&nbsp;|&nbsp;</span>
                ))}
              </h3>
              <h3>Release date: {singleMoviedetails.release_date}</h3>
              <h3>Overview:</h3>
              <p>{singleMoviedetails.overview}</p>
            </div>
          </div>
        </div>
         <h2 className="w-full mt-20 text-center font-bold text-5xl">Cast</h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 place-content-center gap-10 rounded-2xl h-full bg-zinc-900 mt-10">
          {Array.isArray(castallData) &&
  castallData.map((elem, index) => (
    <div className="flex flex-col gap-2  justify-center items-center" key={index}>
     <img
  src={
    elem.profile_path
      ? `https://image.tmdb.org/t/p/w500${elem.profile_path}`
      : "https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg"
  }
  className="w-[300px] rounded-2xl"
  alt="Character Image"
/>
      <h3>{elem.name} as {elem.character}</h3>
    </div>
  ))}
        </div>

      </div>
    </>
  );
}

export default Page;

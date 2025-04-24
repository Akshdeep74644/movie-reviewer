"use client";
import React, { useEffect, useState, use } from "react";

function Page() {
  const [topMovieData, settopMovieData] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const [totalPage, settotalPage] = useState(null)

  useEffect(() => {
    const topMovie = async () => {
      const topMovieapi = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${pageNo}`
      );
      const topmoviedata = await topMovieapi.json();
      settopMovieData(topmoviedata.results);
      settotalPage(100)
    };

    topMovie();
  }, [pageNo]);

  console.log(topMovieData);
  return (
    <>
      <div className="relative">
        <div className="w-full bg-zinc-900 flex justify-between bg-center bg-no-repeat items-center rounded-2xl p-10 bg-cover bg-center relative">
          {topMovieData.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div>
              {topMovieData.map((data, index) => (
               <div className="flex gap-10 bg-zinc-900/90 p-5 rounded-2xl w-full">
               <img
                  src={
                    data.poster_path
                      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                      : "https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg"
                  }
                 alt={data.original_title}
                 className="w-[300px] rounded-2xl"
               />
               <div className="text-xl font-semibold opacity-[0.7] flex flex-col gap-5 mt-10">
                 <h2 className="text-4xl font-bold">{data.title}</h2>
                 <h2>Rating: {data.vote_average}/10</h2>
                 <h3 className="flex">
                   Timing: {data.runtime} | &nbsp;
                 </h3>
                 <h3>Release date: {data.release_date}</h3>
                 <h3>Overview:</h3>
                 <p>{data.overview}</p>
               </div>
             </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-center items-center mt-8 gap-3">
        <div className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl" disabled={pageNo === 1} onClick={() => setpageNo((prev)=> Math.max(prev - 1, 1))}>Back</div>
        <div>{pageNo} of {totalPage}</div>
        <div className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl" disabled={pageNo === totalPage} onClick={() => setpageNo((prev)=> Math.max(prev + 1, 1))}>Next</div>
      </div>
      </div>
    </>
  );
}

export default Page;

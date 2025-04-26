"use client";
import React, { useEffect, useState, use } from "react";
import Pagebtn from "../../component/Pagebtn";
import { useRouter } from "next/navigation";

function Page() {
  const [topMovieData, settopMovieData] = useState([]);
  const [pageNo, setpageNo] = useState(1);
  const [totalPage, settotalPage] = useState(null)
  const [id, setid] = useState(0)

  useEffect(() => {
    const topMovie = async () => {
      const topMovieapi = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=your_api&language=en-US&page=${pageNo}`
      );
      const topmoviedata = await topMovieapi.json();
      settopMovieData(topmoviedata.results);
      settotalPage(100)
    };

    topMovie();
  }, [pageNo]);


  const router = useRouter();
  const movierouteID = (id) => {
    router.push(`/moviedetails/${id}`);
  };

  console.log(topMovieData)
  return (
    <>
      <div className="relative">
        <div className="w-full bg-zinc-900 flex justify-between bg-center bg-no-repeat items-center rounded-2xl p-10 bg-cover bg-center relative">
          {topMovieData.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <div>
              {topMovieData.map((data, index) => (
               <div key={index} className="flex gap-10 bg-zinc-900/90 p-5 rounded-2xl w-full">
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
                 <h3>Release date: {data.release_date}</h3>
                 <h3>Overview:</h3>
                 <p>{data.overview}</p>
                 <h3 className="cursor-pointer" onClick={()=> movierouteID(data.id)}>
            Know more
          </h3>
               </div>
             </div>
              ))}
            </div>
          )}
        </div>

        <Pagebtn pageNo={pageNo} totalPage={totalPage} setpageNo={setpageNo} />
        </div>
    </>
  );
}

export default Page;

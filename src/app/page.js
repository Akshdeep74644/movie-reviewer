"use client"
import Image from "next/image";
import MovieCard from "./component/MovieCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageNo, setpageNo] = useState(1);
  const [apiData, setapiData] = useState([]);
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${pageNo}`;

  const fetchMoviedata = async () =>{
    try {
      const apiFetch = await fetch(apiUrl)
      const moviedata = await apiFetch.json();
      setapiData(moviedata)
    } catch (error) {
      console.log("Something went wrong!", error)
    }
  }
  
  useEffect(() => {
    fetchMoviedata()
  }, [pageNo])

  console.log(apiData)


  return (
    <>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
  {!apiData.results
    ? "Loading..."
    : apiData.results.length === 0
    ? "No data found"
    : apiData.results.map((elem, indx) => (
        <MovieCard
          key={indx}
          src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
          title={elem.original_title}
          rating={elem.vote_average}
        />
      ))}
      <div className="flex justify-center items-center gap-5">
        <div className="cursor-pointer" onClick={() => setpageNo(()=> pageNo - 1)}>back</div>
        <div className="cursor-pointer" onClick={() => setpageNo(()=> pageNo + 1)}>next</div>
      </div>
  </div>
</>
  );
}

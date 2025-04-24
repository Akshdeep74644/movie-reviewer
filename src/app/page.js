"use client"
import Image from "next/image";
import MovieCard from "./component/MovieCard";
import Loader from "./component/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [pageNo, setpageNo] = useState(1);
  const [apiData, setapiData] = useState({});
  const [totalPage, settotalPage] = useState(null)
  const [loader, setloader] = useState(false)
  const [searchInput, setsearchInput] = useState("")

  const fetchMoviedata = async () =>{
    try {
      const api = "c45a857c193f6302f2b5061c3b85e743"
      let apiUrl = '';
      if(searchInput){
        apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${searchInput}&page=${pageNo}`;
        console.log(apiUrl)
      }else{
        apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=${pageNo}`;
        console.log(apiUrl)
      }

      setloader(true)
      const apiFetch = await fetch(apiUrl)
      const moviedata = await apiFetch.json();
      setapiData(moviedata)
      settotalPage(moviedata.total_pages)
    } catch (error) {
      console.log("Something went wrong!", error)
    }finally{
      setloader(false)
    }
  }
  
  useEffect(() => {
    fetchMoviedata()
  }, [pageNo, searchInput])

  console.log(apiData)


  return (
    <>

    <div className="w-full flex justify-center flex-col gap-5 items-center my-[8%]">
    <h3 className="text-7xl font-bold">Search Any Movie</h3>
      <input type="text" onChange={(e)=>{setsearchInput(e.target.value)}} value={searchInput} placeholder="Seach any movie..." className="h-20 w-[60%] border-[1px] decoration-none rounded-2xl focus:outline-none focus:ring-0  border-zinc-700 px-10 text-xl" />
      {searchInput ? <span className="text-lg font-semibold">result for : {searchInput}</span> : "Popular Movies"}
    </div>

    {
      loader ? <Loader /> : <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      {apiData.results?.map((elem, indx) => (
        <MovieCard
          key={indx}
          src={
            elem.poster_path
              ? `https://image.tmdb.org/t/p/w500${elem.poster_path}`
              : "https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg"
          }
          title={elem.original_title}
          rating={elem.vote_average}
          id={elem.id}
        />
      ))}
  </div>
    }

  <div className="flex justify-center items-center mt-8 gap-3">
        <div className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl" disabled={pageNo === 1} onClick={() => setpageNo((prev)=> Math.max(prev - 1, 1))}>Back</div>
        <div>{pageNo} of {totalPage}</div>
        <div className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl" disabled={pageNo === totalPage} onClick={() => setpageNo((prev)=> Math.max(prev + 1, 1))}>Next</div>
      </div>
</>
  );
}

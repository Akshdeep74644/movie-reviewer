import React from 'react'
import Link from 'next/link'

function MovieCard({title, src, rating}) {
  return (
    <>
       <div className='w-[350px] '>
      <img className="w-full rounded-t-xl " src={src || "https://img.freepik.com/free-photo/collage-about-movie-time-with-film-roll_23-2149946310.jpg?semt=ais_hybrid&w=740"} alt="Movie Poster" />
      <div className='w-full flex rounded-b-xl  justify-between items-center  p-5 bg-zinc-800'>
        <div>
        <h2 >{title}</h2>
        <h3 className='opacity-[0.6]'>{rating}</h3>
        </div>
       <div>
       {/* <Link className="cursor-pointer px-5 py-2 bg-zinc-950 rounded-xl" target='_block' href="#">Know more</Link> */}
       </div>
      </div>
    </div>
    </>
  )
}

export default MovieCard

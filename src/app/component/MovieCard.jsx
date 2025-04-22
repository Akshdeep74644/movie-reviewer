import React from 'react'
import Link from 'next/link'

function MovieCard({title, src, rating}) {
  return (
    <>
       <div className='w-[350px] '>
      <img className="w-full " src={src} alt="Movie Poster" />
      <div className='w-full  p-5 bg-zinc-800'>
        <h2>Movie Title</h2>
        <h3>Movie Rating</h3>
        <Link href="#">Know more</Link>
      </div>
    </div>
    </>
  )
}

export default MovieCard

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function MovieCard({ title, src, rating, id }) {
  const router = useRouter();
  const movierouteID = () => {
    router.push(`/moviedetails/${id}`);
  };
  return (
    <>
      <div className="w-[350px] ">
        <img
          className="w-full rounded-t-xl "
          src={
            src ||
            "https://img.freepik.com/free-photo/collage-about-movie-time-with-film-roll_23-2149946310.jpg?semt=ais_hybrid&w=740"
          }
          alt="Movie Poster"
        />
        <div className="w-full flex rounded-b-xl flex-col gap-1  p-5 bg-zinc-800">
          <h2>{title}</h2>
          <h3 className="opacity-[0.6]">{rating}</h3>
          <h3 className="cursor-pointer" onClick={movierouteID}>
            Know more
          </h3>
        </div>
      </div>
    </>
  );
}

export default MovieCard;

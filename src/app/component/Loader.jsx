import React from "react";

function MovieCard() {
  return (
    <>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
      {Array.from({ length: 8 }).map((elem, index) => {
        return (
          <div key={index} className="w-[350px] h-[600px]  animate-pulse ">
            <div className=" h-[75%] bg-zinc-500 rounded-t-xl"></div>
            <div className="w-full flex justify-between flex-col rounded-b-xl items-start h-[25%]  p-5 bg-zinc-800">
               <div className="w-[80%] h-3 rounded-xl bg-zinc-500"></div>
               <div className="w-[60%] h-3 rounded-xl bg-zinc-500"></div>
               <div className="w-[30%] h-3 rounded-xl bg-zinc-500"></div>
            </div>
          </div>
        );
      })}
       </div>
    </>
  );
}

export default MovieCard;

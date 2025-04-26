import React from 'react'

function Pagebtn({pageNo, totalPage, setpageNo}) {

    const pageNext = ()=>{
        setpageNo((prev) => Math.max(prev + 1, 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    const pagePrev = ()=>{
        setpageNo((prev) => Math.max(prev - 1, 1));
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

  return (
    <>
        <div className="flex justify-center items-center mt-8 gap-3">
          <div
            className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl"
            disabled={pageNo === 1}
            onClick={pagePrev}
          >
            Back
          </div>
          <div>
            {pageNo} of {totalPage}
          </div>
          <div
            className="cursor-pointer px-5 py-2 bg-zinc-800 rounded-3xl"
            disabled={pageNo === totalPage}
            onClick={pageNext}
          >
            Next
          </div>
        </div>
    </>
  )
}

export default Pagebtn

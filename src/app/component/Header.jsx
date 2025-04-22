import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <>
     <div className='w-full text-xl font-semibold flex flex-col md:flex-row justify-between items-center px-12 py-5 bg-zinc-800'>
  <div className='mb-2 md:mb-0'>
    <h1 className='text-white text-2xl'>Movie Reviewer</h1>
  </div>
  <div>
    <ul className='flex flex-col md:flex-row gap-3 md:gap-5 text-white text-base items-center'>
      <li><Link href='/'>Home</Link></li>
      <li><Link href='/toprated'>Top Rated</Link></li>
      <li><Link href='/upcoming'>Up Coming</Link></li>
      <li><Link href='/popular'>Popular</Link></li>
    </ul>
  </div>
</div>
    </>
  )
}

export default page

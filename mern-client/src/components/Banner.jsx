import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
          <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
          <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio obcaecati nulla ad error quasi sit eaque deserunt quisquam aperiam esse maxime provident, quibusdam modi perspiciatis repellendus eveniet omnis sequi at.</p>
          <div className=''>
            <input type="search" name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded  rounded-s-sm outline-none mr-1' />
            <button type='submit' className='text-white py-2 px-2 rounded  rounded-s-sm outline-none bg-blue-700 font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
          </div>
        </div>

        {/* right side */}
        {/* <div>right side</div> */}
        <div>
          <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
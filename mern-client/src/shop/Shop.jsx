import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books,setBooks]=useState([]);

  useEffect(()=>{
    fetch("https://bookstore-tn2h.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data));
  },[])

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are here</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(book=><Card>
            <img src={book.imageURL} alt="" className='h-96' />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi adipisci ullam vitae, quaerat sint sapiente, debitis quod aliquam numquam quae illo vero harum tempore molestiae excepturi neque consequuntur totam veritatis?
              </p>
            </p>

            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>
            Buy Now
            </button>
          </Card>)
        }
      </div>

      
    </div>
  )
}

export default Shop
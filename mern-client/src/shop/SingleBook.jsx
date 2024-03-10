import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {

    // now using useLoaderData we are able to get the data from the loader which is insdie the router.jsx
    const { _id,bookTitle,imageURL } = useLoaderData()
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL} alt="" className='h-96' />
        <h2>{_id }</h2>
        <h1>{bookTitle}</h1>
    </div>
  )
}

export default SingleBook
import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-30 absolute text-white bg-gradient-to-r from-black'>
    <h1 className="font-bold text-6xl">{title}</h1>
    <p className='py-6 text-lg w-1/4'>{overview}</p>

 <div>
    <button className='text-black p-4 px-16 bg-white rounded-lg text-xl font-bold hover: bg-opacity-80 '>Play</button>
    <button className='text-white p-4 px-14 bg-gray-500 rounded-lg mx-4 text-xl font-bold bg-opacity-70' >More Info</button>
 </div>
    </div>
  )
}

export default VideoTitle
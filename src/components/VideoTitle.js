import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-30 absolute text-white bg-gradient-to-r from-black ml-26'>
    <h1 className="mx-9 font-bold text-6xl">{title}</h1>
    <p className='mx-9 py-6 text-2xl w-1/4'>{overview}</p>

 <div>
    <button className='mx-9 text-black p-4 px-16 bg-white rounded-lg text-xl font-bold hover: bg-opacity-80 '>▶️ Play</button>
    <button className='mx-9 text-white p-4 px-14 bg-gray-500 rounded-lg mx-4 text-xl font-bold bg-opacity-70 mx-3' >
    <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:inline ltr-4z3qvp e1svuwfo1"
            data-name="CircleI"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg> More Info</button>
 </div>
    </div>
  )
}

export default VideoTitle
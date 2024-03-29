import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MoviesCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img 
        alt='Movie card' 
        src={IMG_CDN_URL+ posterPath}/>
    </div>
  )
}

export default MoviesCards
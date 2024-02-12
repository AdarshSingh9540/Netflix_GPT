import React from 'react'
import GptSearchBar from './GptSearchBar'
import MoviesSuggg from './MoviesSuggg'
import { Logo_URL } from '../utils/Constant'

const GptSearch = () => {
  return (
    <div>
     <div className="absolute -z-10">
    <img src={Logo_URL} alt="" />
    </div>
    <GptSearchBar/>
    <MoviesSuggg/>
    </div>
  )
}

export default GptSearch
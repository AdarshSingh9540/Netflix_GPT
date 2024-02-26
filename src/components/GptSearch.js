import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Logo_URL } from '../utils/Constant'
import GptSearchSuggestions from './GptSearchSuggestions'

const GptSearch = () => {
  return (
    <div>
     <div className="fixed -z-10">
    <img src={Logo_URL} alt="" />
    </div>
    <>
    <GptSearchBar/>
    <GptSearchSuggestions/>
    </>
    </div>
  )
}

export default GptSearch
import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Logo_URL } from '../utils/Constant'
import GptSearchSuggestions from './GptSearchSuggestions'

const GptSearch = () => {
  return (
    <><div className="fixed -z-10">
    <img className="md:full md:object-cover h-screen object-cover md:h-auto " src={Logo_URL} alt="" />
    </div>
    <div className="">
    <GptSearchBar/>
    <GptSearchSuggestions/>
    </div>
    </>
  )
}

export default GptSearch
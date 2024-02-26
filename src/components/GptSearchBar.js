import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI'
import { API_OPTIONS } from '../utils/Constant'

const GptSearchBar  = () => {
  const langKey = useSelector((store)=> store.config.lang);
  const searchText = useRef(null);

  // search mopvies in TMDB

  const searchMovieTMDB = async (movie) =>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.result;
  }

const handleGPTSearchClick = async ()=>{
  console.log(searchText.current.value);
  const gptQuery = "Act as a movies recommodation system and suggest some movies for the query"+ searchText.current.value +". give me name of only top five movies , common separated like the example ahead. Example : Gadar2, Fighter etc"
  const gptRes = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  if(!gptRes.choices){
    // to do error handling or send to error page
  }
  console.log(gptRes?.choices?.[0]?.message?.content.split(","));
  const gptMovies = gptRes?.choices?.[0]?.message?.content.split(",");

 const promiseArray =  gptMovies.map((movie) => searchMovieTMDB(movie));

 const tmdbResults = await Promise.all(promiseArray);

 console.log(tmdbResults);

}
  
  return (
    <div className='pt-[8%]  flex justify-center'>

<form onSubmit={(e)=> e.preventDefault()} action="" className= 'w-1/2 bg-black grid grid-cols-12'>
    
<input ref={searchText} className='p-4 m-4 col-span-10 ' type="text" placeholder={lang[langKey].gptSearchPlaceholder}/>
 <button className='py-3 px-4 bg-red-800 text-white rounded-lg col-span-2 m-4' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
</form>
    </div>
  )
}

export default GptSearchBar
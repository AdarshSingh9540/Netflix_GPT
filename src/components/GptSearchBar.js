import React, { useRef } from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import openai from '../utils/openAI'

const GptSearchBar  = () => {
  const langKey = useSelector((store)=> store.config.lang);
  const searchText = useRef(null);

const handleGPTSearchClick = async ()=>{
  console.log(searchText.current.value);
  const gptRes = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  console.log(gptRes.choices);

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
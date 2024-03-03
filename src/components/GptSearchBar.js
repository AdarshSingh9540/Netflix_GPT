import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/Constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const [isListening, setIsListening] = useState(false);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;
    };

   
    const handleVoiceRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchText.current.value = transcript;
            recognition.stop();
            setIsListening(false);
        };

        recognition.start();
    };

    const handleGPTSearchClick = async () => {
        const gptQuery = `Act as a movies recommendation system and suggest some movies for the query ${searchText.current.value}. Give me the names of only the top five movies, comma-separated, like the example ahead. Example: Gadar2, Fighter, etc.`;
        const gptRes = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });

        if (!gptRes.choices) {
            // Handle error
            return;
        }

        const gptMovies = gptRes?.choices?.[0]?.message?.content.split(',');
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie.trim()));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    };

    return (
        <div className='pt-[40%] md:pt-[8%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} action='' className='w-[99%] md:w-1/2 bg-black grid grid-cols-12 mx-2 md:mx-8 p-1 md:p-2 mt-8'>
                <input ref={searchText} className='searchEl p-4 md:p-4  md:m-4 w-[94%] col-span-10 pl-12 md:pl-16' type='text' placeholder={lang[langKey].gptSearchPlaceholder} />
                <img src={isListening ?
                 "https://raw.githubusercontent.com/meetparikh1202/voice-search-multi-lang/main/assets/mic-active.png" : 
                 "https://raw.githubusercontent.com/meetparikh1202/voice-search-multi-lang/main/assets/mic.png"} 
                 className='voiceSearch cursor-pointer absolute  w-10 mt-2 md:mt-6 ml-2 md:ml-6 items-center' alt="voice icon"
                  onClick={handleVoiceRecognition} />
                <button className=' py-0 md:py-3 px-1  md:px-4 bg-red-800 text-white rounded-lg col-span-2  md:m-4' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>
    );
};

export default GptSearchBar;

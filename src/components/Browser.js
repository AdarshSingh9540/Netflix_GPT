import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import MainCont from './MainCont';
import SecCont from './SecCont';
import usePopularMovies from '../utils/usePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import useTopRatedMovies from '../utils/useTopRatedMovies';
import useUpcomingMovies from '../utils/useUpcomingMovies';
const Browser = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();
  return (
    <>
      <Header/>
      {showGptSearch ? <GptSearch/> :
    (  <>
      <MainCont/>
      <SecCont/> 
      </>
     ) }
    <div></div>
    </>
  )
}

export default Browser
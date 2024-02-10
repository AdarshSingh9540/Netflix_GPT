import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/useNowPlayingMovies';
import MainCont from './MainCont';
import SecCont from './SecCont';
const Browser = () => {
useNowPlayingMovies();

  return (
    <>
      <Header/>
      <MainCont/>
      <SecCont/> 
    <div></div>
    </>
  )
}

export default Browser
import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const SecCont = () => {
    const movies = useSelector((store) => store.movies);
  return ( movies.nowPlayingMovies && (
    <div className='bg-black'>
    <div className="-mt-52 pl-12 relative z-20">
    <MoviesList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
    <MoviesList title={"Top Rated"}  movies={movies.TopRatedMovies}/>
    <MoviesList title={"Popular"}  movies={movies.PopularMovies}/>
     <MoviesList title={"Upcoming Movies"}  movies={movies.nowPlayingMovies}/>
    </div>
    </div>
  )
  )
}

export default SecCont
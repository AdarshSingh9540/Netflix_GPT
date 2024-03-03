import React from 'react'
import MoviesCards from './MoviesCards'

const MoviesList = ({title , movies}) => {
 
  return (
    <div className='px-6 '>
       <h1 className='text-lg md:text-3xl py-6 text-white'>{title}</h1>
        <div className="flex overflow-x-scroll">
        <div className='flex'>
        {
          movies &&  movies.map((movie) => (
                <MoviesCards key={movie.id} posterPath={movie?.poster_path}/>
            ))
        }
        
       
        </div>
        </div>
    </div>
  )
}

export default MoviesList
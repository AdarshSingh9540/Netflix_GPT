import {useEffect} from 'react'
import { API_OPTIONS } from './Constant';
import { addTrailerVideo } from './moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMoiveTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector(store =>store.movies.trailerVideo);
    const getMoviesVideos = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/866398/videos?language=en-US", API_OPTIONS);
      const json = await data.json();
    
      const filterData = json.results.filter(video => video.type === "Trailer");
      const trailer = filterData.length? filterData[0] : json.results[0];
    
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(()=>{
     !trailerVideo && getMoviesVideos()
    },[]);
}

export default useMoiveTrailer
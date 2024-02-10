import {useEffect} from 'react'
import { API_OPTIONS } from './Constant';
import { addTrailerVideo } from './moviesSlice';
import { useDispatch } from 'react-redux';

const useMoiveTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMoviesVideos = async () =>{
      const data = await fetch("https://api.themoviedb.org/3/movie/866398/videos?language=en-US", API_OPTIONS);
      const json = await data.json();
      console.log(json)
      console.log(movieId)
      const filterData = json.results.filter(video => video.type === "Trailer");
      const trailer = filterData.length? filterData[0] : json.results[0];
    //   console.log(trailer);
      dispatch(addTrailerVideo(trailer))
    }
  
    useEffect(()=>{
      getMoviesVideos()
    },[]);
}

export default useMoiveTrailer

import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "./Constant";
import { addUpcomingMovies } from "./moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const UpcomingMovies = useSelector(store=> store.movies.UpcomingMovies);
    const getUpcomingMovies = async () =>{
     const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=2",API_OPTIONS);
     const json = await data.json();
 
      dispatch(addUpcomingMovies(json.results))
    }
   
    useEffect(()=>{
    !UpcomingMovies && getUpcomingMovies();
    },[])
   
}

export default useUpcomingMovies;
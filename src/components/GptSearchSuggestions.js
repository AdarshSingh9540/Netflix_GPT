import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const GptSearchSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null;
  return (
    <div className="px-3 md:px-6 py-10 m-4 bg-black  text-white rounded-md">
      {movieNames.map((movieName,index)=> <MovieList key={index} title={movieName} movies={movieResults[0]} />)}
    </div>
  );
};

export default GptSearchSuggestions;
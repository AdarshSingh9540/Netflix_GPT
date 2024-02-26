// GptSearchSuggestions.js
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList"

const GptSearchSuggestions = () => {
  const { movieNames , movieResults } = useSelector((store) => store.gpt);

  if (!movieNames || movieNames.length === 0) return null;

  return (
      <div className="p-5 m-4 bg-black text-white rounded-md opacity-75">
      {movieNames.map((movieName, Index) =><MoviesList key={movieName} title={movieName} movies={movieResults[Index]}/> )}
        
      </div>
  );
};

export default GptSearchSuggestions;

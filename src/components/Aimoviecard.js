import { IMG_CDN_URL } from "../utils/Constant";

const Aimoviecard = ({ movie }) => {
  return (
    <div className="flex mx-40 bg-slate-900 rounded-lg p-4 my-6 shadow-2xl">
      <div className="flex items-center">
        <img
          src={IMG_CDN_URL + movie.poster_path}
          className="w-48 rounded-xl hover:scale-105 duration-200 shadow-2xl"
          alt="Movie Poster"
        />
      </div>
      <div className="m-8 ml-10 mt-10 p-7 flex-1">
        <h1 className="text-white font-semibold text-4xl">{movie.original_title}</h1>
        <h2 className="text-white opacity-60 mt-4">{movie.release_date}</h2>
        <h2 className="text-white text-xl mt-2 ">  
          {movie.overview.split(' ').slice(0, 30).join(' ')}
          {movie.overview.split(' ').length > 30 && '...'}</h2>
        <div className="mt-3">
          <button className="bg-white m-2 px-6 py-3 rounded-md text-black shadow-md hover:opacity-75 font-bold">▶️ Play</button>
          <button className="bg-gray-400 m-2 px-6 py-3 rounded-md opacity-65 hover:opacity-75 shadow-md font-bold">More info</button>
        </div>
      </div>
    </div>
  );
};

export default Aimoviecard;

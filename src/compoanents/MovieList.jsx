import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MovieList = () => {



    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
  
    
    async function getMovies() {
      const { data } = await axios.get(
      //  `https://jsonplaceholder.typicode.com/users`
           `http://www.omdbapi.com/?i=tt3896198&apikey=cc6cc917&s=test`
           
      );

    
      setMovies(data);
    }
  
  

    useEffect(() => {
        getMovies();

       
      }, []);


  return (
    <div>


 <div className="container">
      <div className="row">
        <div className="movies" >
          {movies.Search?.map((movie) => (
              <div class="movie">
              <figure class="movie__img--wrapper">
                <img
                  class="movie__img"
                  src={movie.Poster}
                  alt=""
                />
              </figure>
              <div class="movie__title"><h2>{movie.Title}</h2></div>
              <div class="movie__Type"><h3>{movie.Type}</h3></div>
                 <div class="movie__year"><h3>{movie.Year}</h3></div>
            </div> 
            
          ))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default MovieList;

import React from 'react';


/**
 *
 *
 * @function Movies - Renders html markup for Movies component.
 * @params (props)
 */
const Movies = (props) => {
  
 return(
 <section className="movie-container">
  <h3>Results from Movie DB API</h3>
  <ul className="movies-results">
  
  
  { props.movies.map((movie, idx) => 
  <li> 
   
   <p><span>{movie.title}</span> 
         was relased on {movie.released_date}. Out of {movie.vote_count} total votes, {movie.title} has an average vote of {movie.vote_average} and a popularity score of {movie.popularity}.
    </p>
    <img src={movie.image_url} alt="poster"/>
    <p>{movie.overview}</p>
   </li>
   )};

   </ul>
   </section>
  );
}

export default Movies;


import React from "react";
//this component displays individual movie cards//
const MovieCard = ({movie}) =>{
   const imageUrl ='https://image.tmdb.org/t/p/w500${movie.poster_path}';
   
   return(
    <div className="movie-card">
     <image src={imageUrl} alt={movie.title}/>

<h3>{movie.title}</h3>
<p>{movie.release_date}</p>
    </div>
   );
};
export default MovieCard;

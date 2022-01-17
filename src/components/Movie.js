import React from "react";
import { useParams } from "react-router-dom";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// Components
import Grid from "./Grid/MovieGrid";
import Breadcrumb from "./BreadCrumb/Breadcrumb";
import Spinner from "./Spinner/Spinner";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actors from "./Actors/Actor";

// Image
import NoImage from "../images/no_image.jpg";

// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";

function Movie() {
  const { movieId } = useParams();
  const { currentMovie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong ...</div>;
  console.log(currentMovie);
  return (
    <div>
      <Breadcrumb movieTitle={currentMovie.original_title} />
      <MovieInfo movie={currentMovie} />
      <MovieInfoBar
        time={currentMovie.runtime}
        budget={currentMovie.budget}
        revenue={currentMovie.revenue}
      />
      <Grid header="Actors">
        {currentMovie.actors.map((actor) => (
          <Actors
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </div>
  );
}

export default Movie;

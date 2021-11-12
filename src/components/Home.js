import React, { useState, useEffect } from "react";

// config import
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//  Components
import HeroImage from "./HeroImage/HeroImage";
import MovieGrid from "./Grid/MovieGrid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image

import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <MovieGrid header="Popular Movies">
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable={true}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
          />
        ))}
      </MovieGrid>
      <Spinner />
    </>
  );
};

export default Home;

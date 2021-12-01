import React, { useState, useEffect } from "react";

// config import
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//  Components
import HeroImage from "./HeroImage/HeroImage";
import MovieGrid from "./Grid/MovieGrid";
import Thumb from "./Thumb/Thumb";
import Spinner from "./Spinner/Spinner";
import Button from "./Button/Button";

// Hook
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image

import NoImage from "../images/no_image.jpg";
import SearchBar from "./SearchBar/SearchBar";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  console.log(state);

  if (error) {
    return <div>...Opps.. Something went wrong, we're fixing it.. </div>;
  }

  return (
    <>
      {!searchTerm && state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <SearchBar setSearchTerm={setSearchTerm} />

      <MovieGrid header={searchTerm ? "Search Results" : "Popular Movies"}>
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
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;

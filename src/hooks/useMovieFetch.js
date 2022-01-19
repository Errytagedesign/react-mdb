import { useState, useEffect } from "react";

// APi
import API from "../API";

// Helpers
import { isPersistedState } from "../helpers";

export const useMovieFetch = (movieId) => {
  const [currentMovie, setCurrentMovie] = useState({});
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setloading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);

        // Get Directors Only
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );

        setCurrentMovie({ ...movie, actors: credits.cast, directors });
        console.log("from api");
        setloading(false);
      } catch (error) {
        setError(true);
      }
      const sessionState = isPersistedState(movieId);
      if (sessionState) {
        setCurrentMovie(sessionState);
        console.log("from session storage");
        setloading(false);
        return;
      }
    };

    fetchMovie();
  }, [movieId]);

  // Write sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId, JSON.stringify(currentMovie));
  }, [movieId, currentMovie]);

  return { currentMovie, loading, error };
};

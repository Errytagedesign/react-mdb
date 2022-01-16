import { useState, useEffect } from "react";
import API from "../API";

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
        setloading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchMovie();
  }, [movieId]);

  return { currentMovie, loading, error };
};

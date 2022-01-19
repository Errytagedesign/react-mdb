import { useState, useEffect } from "react";

//  Import API
import API from "../API";

// Helper

import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,

        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
    }

    setLoading(false);
  };

  // Search and Initial render
  useEffect(() => {
    // Check if there's session storage before fetching from api, if sessionstorage is empty then fetch from api
    // "(!searchTerm)" means don't check  session storage for data when searching for movies
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      // if sessionstorage has a saved data, then fetch it
      if (sessionState) {
        console.log("From session storage");
        setState(sessionState);
        return;
      }
    }

    // Fetch from api if we don't have session storage or fetch from api on initial render
    setState(initialState);
    console.log("From session api");
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  // Load more movies
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMore(false);
  }, [isLoadingMore, state.page, searchTerm]);

  // Write to session storage
  useEffect(() => {
    // dont write to sessionStorage when searching
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state));
    }
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};

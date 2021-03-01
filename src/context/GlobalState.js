import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";

//initial state
const initialState = {
  watchlist: [],
  watched: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provide components
const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.any,
  props: PropTypes.object,
  watched: PropTypes.any,
  watchlist: PropTypes.any,
};

export default GlobalProvider;

import axios from "axios";
/*
// Action creators
import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export function toggleEditing() {
  return { type: "TOGGLE_EDITING" };
}

export const updateTitle = newTitle => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get("https://icanhazdadjoke.com/", { headers })
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.joke });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: err.response.message
      });
    });
};
 */

import {
    FETCHING_POKEMON_SPECIES_START,
    FETCHING_POKEMON_SPECIES_SUCCESS,
    FETCHING_POKEMON_START,
    FETCHING_POKEMON_SUCCESS
} from "../reducers/pokemonReducer";

export const getPokemon = () => dispatch => {
    dispatch({type: FETCHING_POKEMON_START});
    axios.get(`https://pokeapi.co/api/v2/pokemon/${1}/`)//todo: create a curPokemonIndex in state that can be changed
        .then(res => {
            console.log(res);
            dispatch({type: FETCHING_POKEMON_SUCCESS, payload: res.data});
        }).then(() => {
        dispatch({type: FETCHING_POKEMON_SPECIES_START});
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${1}/`)//todo: this needs to be a state property somehow. not sure if its a good idea https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator
            .then(res => {
                console.log("Species: ", res);
                dispatch({type: FETCHING_POKEMON_SPECIES_SUCCESS, payload: res.data});
            })
            .catch(console.log);
    })
        .catch(console.log);
}
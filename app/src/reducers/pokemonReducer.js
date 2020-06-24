export const FETCHING_POKEMON_START = "FETCHING_POKEMON_START";
export const FETCHING_POKEMON_SUCCESS = "FETCHING_POKEMON_SUCCESS";
export const FETCHING_POKEMON_FAIL = "FETCHING_POKEMON_FAIL";
export const FETCHING_POKEMON_SPECIES_START = "FETCHING_POKEMON_SPECIES_START";
export const FETCHING_POKEMON_SPECIES_SUCCESS = "FETCHING_POKEMON_SPECIES_SUCCESS";
export const FETCHING_POKEMON_SPECIES_FAIL = "FETCHING_POKEMON_SPECIES_FAIL";

export const initialState = {
    currentPokemon: {
        name: "",
        sprites: {}
    },
    currentSpecies: {
        id: 0,
        color: {name: ""},
        genera: [
            {genus: ""},
            {genus: ""},
            {genus: ""},
            {genus: ""},
            {genus: ""},
            {genus: ""},
            {genus: ""},
            {genus: ""},
        ],//todo: what to do instead of this? I need the 8th item from this array in the api, but have to explicitly define 8 objects in order for
          // it to not be undefined
    },
    loading: false,
    isFetching: false,
    error: "",
    currentPokeIndex: 0,
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_POKEMON_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCHING_POKEMON_SUCCESS:
            return {
                ...state,
                currentPokemon: action.payload,
                isFetching: false
            }
        case FETCHING_POKEMON_SPECIES_START:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCHING_POKEMON_SPECIES_SUCCESS:
            return {
                ...state,
                currentSpecies: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}
import {FETCH_PLAYERS, FETCH_PLAYERS_SUCCESS, FETCH_PLAYERS_ERROR} from './actions';

const initialState = {
  loading: false,
  players: [],
  error: null
};

export function playersReducer(state = initialState, action) {
  switch(action.type) {
  case FETCH_PLAYERS: 
    return {
      ...state,
      loading: true
    };
  case FETCH_PLAYERS_SUCCESS:
    return {
      ...state,
      loading: false,
      players: action.payload
    };
  case FETCH_PLAYERS_ERROR:
    return {
      ...state,
      loading: false,
      error: action.error
    };
  default: 
    return state;
  }
}

export const getPlayers = state => state.players;
export const getPlayersPending = state => state.loading;
export const getPlayersError = state => state.error;

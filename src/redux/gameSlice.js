import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    games: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchGamesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchGamesSuccess(state, action) {
      state.loading = false;
      state.games = action.payload;
    },
    fetchGamesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchGamesStart, fetchGamesSuccess, fetchGamesFailure } = gameSlice.actions;

export const fetchGames = () => async (dispatch) => {
  try {
    dispatch(fetchGamesStart());
    const response = await axios.get('https://www.freetogame.com/api/games');
    dispatch(fetchGamesSuccess(response.data));
  } catch (error) {
    dispatch(fetchGamesFailure(error.message));
  }
};

export default gameSlice.reducer;

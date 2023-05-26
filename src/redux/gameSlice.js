import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  games: [],
  isLoading: false,
  error: null,
  selectedCategory: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    fetchGamesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchGamesSuccess: (state, action) => {
      state.isLoading = false;
      state.games = action.payload;
    },
    fetchGamesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    clearCategory: (state) => {
      state.selectedCategory = '';
    },
  },
});

export const {
  fetchGamesStart, fetchGamesSuccess, fetchGamesFailure, setCategory, clearCategory,
} = gameSlice.actions;

export default gameSlice.reducer;

// API fetch function
export const fetchGames = (category) => async (dispatch) => {
  dispatch(fetchGamesStart());
  try {
    const options = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {
        category, // Use the dynamic category value
      },
      headers: {
        'X-RapidAPI-Key': '813398e5bcmsh991821b7dd7c8acp1c46c0jsn08219d1a1e17',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    dispatch(fetchGamesSuccess(response.data));
  } catch (error) {
    dispatch(fetchGamesFailure(error.message));
  }
};

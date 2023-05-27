import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import Home from '../components/Home';

const mockStore = configureStore([]);

jest.mock('axios'); // Mock the axios module

describe('Home', () => {
  test('renders "Discover Endless Joy through Gaming!" message', async () => {
    const handleCategoryChangeMock = jest.fn(); // Mock the handleCategoryChange function

    const store = mockStore({
      // Mock the necessary state data
      handleCategoryChange: handleCategoryChangeMock,
    });

    axios.request.mockResolvedValue({
      data: 'Mocked response', // Mock the response data
    });

    render(
      <Provider store={store}>
        <Home handleCategoryChange={handleCategoryChangeMock} />
      </Provider>,
    );

    expect(screen.getByText('Discover Endless Joy through Gaming!')).toBeInTheDocument();

    // Optionally, you can also assert that the axios request was called with the expected options
    expect(axios.request).toHaveBeenCalledWith({
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      params: {
        category: '', // Provide the expected category value
      },
      headers: {
        'X-RapidAPI-Key': '813398e5bcmsh991821b7dd7c8acp1c46c0jsn08219d1a1e17',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      },
    });
  });
});

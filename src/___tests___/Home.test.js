import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'; // Import the toBeInTheDocument function
import Home from '../components/Home';

const mockStore = configureStore([]);

describe('Home', () => {
  test('renders "Discover Endless Joy through Gaming!" message', () => {
    const store = mockStore({
      game: { games: [] }, // Mock the necessary state data
    });

    render(
      <Provider store={store}>
        <Home handleCategoryChange={jest.fn()} />
      </Provider>,
    );

    expect(screen.getByText('Discover Endless Joy through Gaming!')).toBeInTheDocument(); // Use the toBeInTheDocument function
  });
  test('renders "(10) Categories Found" message', () => {
    const store = mockStore({
      game: { games: [] },
    });

    render(
      <Provider store={store}>
        <Home handleCategoryChange={jest.fn()} />
      </Provider>,
    );

    expect(screen.getByText('(10) Categories Found')).toBeInTheDocument(); // Use the toBeInTheDocument function
  });
});

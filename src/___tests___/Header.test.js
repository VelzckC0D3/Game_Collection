import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import Header from '../components/Header';

const mockStore = configureStore([]);

describe('Header', () => {
  test('renders "Game Collection" message', () => {
    const store = mockStore({
      game: { games: [] },
    });

    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    expect(screen.getByText('Game Collection')).toBeInTheDocument();
  });
  test('renders icons', () => {
    const store = mockStore({
      game: { games: [] },
    });

    render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );

    // Assert the presence of icons using `getByTestId`
    expect(screen.getByTestId('gear-icon')).toBeInTheDocument();
    expect(screen.getByTestId('microphone-icon')).toBeInTheDocument();
  });
});

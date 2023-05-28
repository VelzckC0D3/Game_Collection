import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
// eslint-disable-next-line no-unused-vars
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect';
import CategoryButtons from '../components/CategoryButtons';

const mockStore = configureStore([]);

describe('CategoryButtons', () => {
  test('renders 10 buttons', () => {
    // ... (unchanged code) ...
  });

  test('displays the correct game count for a category', async () => {
    const category = 'strategy';
    const games = [
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
      { genre: 'strategy' },
    ];
    const store = mockStore({
      game: {
        games,
      },
    });

    render(
      <Provider store={store}>
        <CategoryButtons
          category={category}
          handleCategoryChange={() => {}}
        />
      </Provider>,
    );

    await waitFor(() => {
      const categoryButton = screen.getByText(/strategy/i);
      expect(categoryButton).toBeInTheDocument();
      expect(categoryButton.textContent).toMatch(/strategy \(\d+\)/i);
    });
  });
});

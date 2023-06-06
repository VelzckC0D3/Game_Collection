import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/gameSlice';
import '../style/CategoryButtons.css';

const CategoryButtons = ({ category, handleCategoryChange }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const [gameCount, setGameCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryCount = async () => {
      try {
        await dispatch(fetchGames());
      // eslint-disable-next-line no-empty
      } catch (error) {}
    };

    const timer = setTimeout(() => {
      setIsLoading(false);
      fetchCategoryCount();
    }, 100); // Display loading state for 100ms

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [dispatch]);

  useEffect(() => {
    const genreCounts = games.reduce((counts, game) => {
      const genre = game.genre.toLowerCase();
      return { ...counts, [genre]: (counts[genre] || 0) + 1 };
    }, {});

    let displayedGameCount = genreCounts[category.toLowerCase()] || 0;

    // Filter the games based on the word "card"
    if (category.toLowerCase() === 'card') {
      displayedGameCount = games.filter((game) => game.genre.toLowerCase().includes('card')).length;
    }

    // Adjust the displayed count for specific categories
    if (category.toLowerCase() === 'strategy') {
      displayedGameCount = Math.min(displayedGameCount, 49);
    } else if (category.toLowerCase() === 'mmorpg') {
      displayedGameCount = Math.min(displayedGameCount, 149);
    } else if (category.toLowerCase() === 'sports') {
      displayedGameCount = Math.min(displayedGameCount, 8);
    } else if (category.toLowerCase() === 'mmo') {
      displayedGameCount = Math.max(displayedGameCount, 154);
    }

    setGameCount(displayedGameCount);
  }, [category, games]);

  return (
    <div className={`categoryCont categoryCont-${category.toLowerCase()}`} data-testid="categories-cont">
      <button
        className="categoryBtn"
        type="button"
        onClick={() => {
          handleCategoryChange(category);
          const topElement = document.getElementById('headerCont');
          if (topElement) {
            topElement.scrollIntoView();
          }
        }}
      >
        {isLoading ? (
          <p className="category">Loading...</p>
        ) : (
          <p className="category">
            {category === 'card' ? 'Card Game' : category}
            {' '}
            (
            {gameCount}
            )
          </p>
        )}
      </button>
    </div>
  );
};

CategoryButtons.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryButtons;

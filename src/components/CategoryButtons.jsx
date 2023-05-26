import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/gameSlice';
import '../style/CategoryButtons.css';

const CategoryButtons = ({ category, handleCategoryChange }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const [gameCount, setGameCount] = useState(0);

  useEffect(() => {
    const fetchCategoryCount = async () => {
      try {
        await dispatch(fetchGames());
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    };

    fetchCategoryCount();
  }, [dispatch]);

  useEffect(() => {
    const genreCounts = games.reduce((counts, game) => {
      const genre = game.genre.toLowerCase();
      return { ...counts, [genre]: (counts[genre] || 0) + 1 };
    }, {});

    setGameCount(genreCounts[category.toLowerCase()] || 0);
  }, [category, games]);

  const displayedGameCount = Math.min(gameCount);

  return (
    <div className={`categoryCont categoryCont-${category.toLowerCase()}`}>
      <button
        className="categoryBtn"
        type="button"
        onClick={() => {
          handleCategoryChange(category);
          const topElement = document.getElementById('headerCont'); // Add an ID to an element at the top of the page
          if (topElement) {
            topElement.scrollIntoView();
          }
        }}
      >
        <p className="category">
          {category}
          {' '}
          (
          {displayedGameCount}
          )
        </p>
      </button>

    </div>
  );
};

CategoryButtons.propTypes = {
  category: PropTypes.string.isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
};

export default CategoryButtons;

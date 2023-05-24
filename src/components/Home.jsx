import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from '../redux/gameSlice';

const Home = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const loading = useSelector((state) => state.game.loading);
  const error = useSelector((state) => state.game.error);
  const selectedCategory = localStorage.getItem('selectedCategory');

  const [hideHeading, setHideHeading] = useState(false);
  const [hideButtons, setHideButtons] = useState(false);
  const [categoryName, setCategoryName] = useState('');

  const handleCategoryChange = (category) => {
    dispatch(fetchGames(category));
    localStorage.setItem('selectedCategory', category);
    setHideHeading(true);
    setHideButtons(true);
    setCategoryName(category);
  };

  const handleGoBack = () => {
    localStorage.removeItem('selectedCategory');
    setHideHeading(false);
    setHideButtons(false);
    setCategoryName('');
  };

  useEffect(() => {
    if (selectedCategory) {
      dispatch(fetchGames(selectedCategory));
      setCategoryName(selectedCategory);
    } else {
      dispatch(fetchGames());
      setCategoryName('');
    }
  }, [dispatch, selectedCategory]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error}
      </p>
    );
  }

  const filteredCategories = ['shooter', 'strategy', 'fighting', 'mmorpg', 'sports', 'racing'];

  return (
    <>
      {!hideHeading && <h1>Games</h1>}
      {!hideButtons && (
        <div>
          {filteredCategories.map((category) => (
            <div key={category} className="category-button">
              <button type="button" onClick={() => handleCategoryChange(category)}>{category}</button>
            </div>
          ))}
        </div>
      )}
      {hideButtons && (
        <div>
          <button type="button" onClick={handleGoBack}>Go Back</button>
        </div>
      )}
      {hideHeading && (
        <header>
          <h1>
            {categoryName}
          </h1>
        </header>
      )}
      <ul>
        {games
          .filter((game) => game.genre.toLowerCase() === selectedCategory)
          .slice(0, 6)
          .map((game) => (
            <li key={game.id}>
              {game.genre}
              {' '}
              ---
              {' '}
              {game.title}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;

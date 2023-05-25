import React from 'react';
import PropTypes from 'prop-types';

const GameList = ({ games, selectedCategory }) => {
  const filteredGames = games.filter((game) => game.genre.toLowerCase() === selectedCategory);

  return (
    <ul>
      {filteredGames.slice(0, 6).map((game) => (
        <li key={game.id}>
          {game.genre}
          {' '}
          ---
          {' '}
          {game.title}
        </li>
      ))}
    </ul>
  );
};

GameList.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      genre: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedCategory: PropTypes.string.isRequired,
};

export default GameList;

import React from 'react';
import { useSelector } from 'react-redux';
import GameList from './GameList';

const CategoryGames = () => {
  const selectedCategory = localStorage.getItem('selectedCategory');
  const games = useSelector((state) => state.game.games);

  // Filter the games based on the selected category
  const filteredGames = games.filter((game) => game.category === selectedCategory);

  return (
    <div>
      <h2>{selectedCategory}</h2>
      <GameList games={filteredGames} selectedCategory={selectedCategory} />
    </div>
  );
};

export default CategoryGames;

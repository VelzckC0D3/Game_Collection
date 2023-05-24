import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGames } from './redux/gameSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const loading = useSelector((state) => state.game.loading);
  const error = useSelector((state) => state.game.error);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

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

  return (
    <div className="App">
      <h1>redux api fetch</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

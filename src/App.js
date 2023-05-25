import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FilteredGames from './components/GameList';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/filtered-games/:category" component={FilteredGames} />
    </Routes>
  </Router>
);

export default App;

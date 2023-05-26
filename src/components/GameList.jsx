import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/GameList.css';
import { AiOutlineSearch } from 'react-icons/ai';
import shooterImage from '../assets/img/shooter.webp';
import strategyImage from '../assets/img/strategy.webp';
import fightingImage from '../assets/img/fighting.webp';
import mmorpgImage from '../assets/img/mmorpg.webp';
import sportsImage from '../assets/img/sports.webp';
import racingImage from '../assets/img/racing.webp';
import mobaImage from '../assets/img/moba.webp';
import mmoImage from '../assets/img/mmo.webp';

const GameList = ({ games, selectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredGames = games.filter(
    (game) => game.genre.toLowerCase() === selectedCategory
      && (game.genre.toLowerCase().includes(searchQuery.toLowerCase())
        || game.title.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const categoryDescription = {
    shooter: 'Immerse yourself in intense battles, strategic decision-making, and heart-pounding gunplay as you navigate volatile environments and outsmart your enemies.',
    strategy: 'Command vast armies, build thriving civilizations, and shape the course of history through meticulous planning and cunning tactics.',
    fighting: 'Engage in adrenaline-fueled combat, mastering intricate combos, and showcasing your martial arts skills in fierce one-on-one clashes.',
    mmorpg: 'Embark on epic quests, forge alliances, and explore vast, living worlds with a multitude of players, shaping your own legendary tale.',
    sports: 'Experience the thrill of realistic sports simulations, competing against skilled opponents, and striving for victory in a variety of athletic disciplines.',
    racing: 'Feel the rush of high-speed races, maneuvering through breathtaking tracks, upgrading vehicles, and chasing the thrill of victory.',
    moba: 'Collaborate with teammates, employ strategic teamwork, and engage in fast-paced, competitive multiplayer battles in dynamic arenas.',
    mmo: 'Immerse yourself in vast online servers, team up with fellows, and embark on epic battles, it could be competitive or cooperative, it is up to you!',
  };

  const categoryBackgrounds = {
    shooter: shooterImage,
    strategy: strategyImage,
    fighting: fightingImage,
    mmorpg: mmorpgImage,
    sports: sportsImage,
    racing: racingImage,
    moba: mobaImage,
    mmo: mmoImage,
  };

  return (
    <>
      <div
        className="gameHeroCont"
        style={{ backgroundImage: `url(${categoryBackgrounds[selectedCategory.toLowerCase()]})` }}
      >
        <div className="gameHero">
          <h2 className="gameHeroTitle">
            {selectedCategory}
            {' '}
            Games
          </h2>
          <p className="gameHeroDesc">{categoryDescription[selectedCategory.toLowerCase()]}</p>
          <div className="searchBar">
            <input
              className="searchGame"
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch className="searchIcon" />
            <p className="currentGames">
              {filteredGames.length}
              {' '}
              Games Found
            </p>
          </div>
        </div>
      </div>

      <ul className="gamesUl">
        {filteredGames.map((game) => (
          <li className="game" key={game.id}>
            <div className="gameImgCont">
              <img src={game.thumbnail} alt="" className="gameImg" />
            </div>
            <div className="gameInfo">
              <h3 className="gameTitle">
                {game.title}
              </h3>
              <p className="gameDeveloper">
                developed by:
                <br />
                {game.developer}
              </p>
              <a className="gameBtn" href={game.game_url} target="_blank" rel="noopener noreferrer">Learn More</a>
            </div>
          </li>
        ))}
      </ul>
    </>
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
